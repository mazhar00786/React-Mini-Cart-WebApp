import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';

import axios from 'axios';
import swal from 'sweetalert';

const Checkout = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); 
  const [error, setError] = useState([]); 
  const [form, setForm] = useState({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      // payment_mode: '',
  }); 
  var cartTotal = 0;


     
  if (!localStorage.getItem('auth_token')) {
      history.push('/')
      swal("Not Authorized", "Please login to access your cart", "warning")
  }

  useEffect(() => {
      let isMounted = true;

      axios.get(`/api/cart`).then(res => {
          if (isMounted) {
              if (res.data.status === 200) {
                setCart(res.data.cart); 
                setLoading(false);
              } else if(res.data.status === 401) {
                  history.push('/');
                  swal("Warning", res.data.message, "error");
              }             
          }
      }).catch(() => {});           
    
      return () => {
          isMounted = false;
      }

  }, [history]); 

  const handleInput = (e) => {
    e.persist();
    setForm({...form, [e.target.name]: e.target.value})   
  }

/** Paypal Payment Integration Code */
const orderinfo_data = {
  first_name: form.first_name,
  last_name: form.last_name,
  email: form.email,
  phone: form.phone,
  address: form.address,
  city: form.city,
  state: form.state,
  zip_code: form.zip_code,
  payment_mode: "PayPal",
  payment_id: '',
}

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const createOrder = (data, actions) => {
  return actions.order.create({
    purchase_units: [
      {
        amount: {
          // value: cartTotal,
          value: "0.1",
        },
      },
    ],
  });
};
const onApprove = (data, actions) => {
  // return actions.order.capture();
  return actions.order.capture().then(function(details) {
    //grt payment_id
    orderinfo_data.payment_id = details.id;

    axios.post(`/api/place-order`, orderinfo_data).then(res => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, 'success');
          setError([]);
          history.push('/thank-you')
        } else if (res.data.status === 422) {
          setError(res.data.errors)
        }
    });
  });
};
/** Paypal Payment Integration Code End here */

  const submitOrder = (e, payment_mode) => {
    e.preventDefault();

    const data = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      zip_code: form.zip_code,
      payment_mode: payment_mode,
      payment_id: '',
    }

    switch (payment_mode) {
      case 'cod':
        axios.post(`/api/place-order`, data).then(res => {
            if (res.data.status === 200) {
              swal("Success", res.data.message, 'success');
              setError([]);
              history.push('/thank-you')
            } else if (res.data.status === 422) {
              setError(res.data.errors)
            }
        });

        break;

      case 'razorpay':
        axios.post(`/api/validate-order`, data).then(res => {
            if (res.data.status === 200) {

              setError([]);

              var options = {
                "key": "rzp_test_AAT4eJS1cJi2rh", // Enter the Key ID generated from the Dashboard
                // "amount": (cartTotal * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "amount": (1 * 100),
                // "currency": "INR",
                "name": "Shopping Kart",
                "description": "Thanks for purchasing from Shopping Kart",
                "image": "https://example.com/your_logo",
                 // "order_id": "order_9A33XWu170gUtm",
                "handler": function (response){
                      // alert();
                    data.payment_id = response.razorpay_payment_id;

                    axios.post(`/api/place-order`, data).then(res => {
                        if (res.data.status === 200) {
                          swal("Success", res.data.message, 'success');
                          history.push('/thank-you')
                        }
                    });
                  },
                  "prefill": {
                      "name": data.first_name + data.last_name,
                      "email": data.email,
                      "contact": data.phone
                  },
                  "theme": {
                      "color": "#3399cc"
                  }
              };
              var rzp = new window.Razorpay(options);
              rzp.open();

            } else if (res.data.status === 422) {
              setError(res.data.errors)
            }
        });

        break;

      case 'paypal':
        axios.post(`/api/validate-order`, data).then(res => {
          if (res.data.status === 200) {

            setError([]);
            // paypalModal
            var myModal = new window.bootstrap.Modal(document.getElementById('paypalModal'));
            myModal.show()

          } else if (res.data.status === 422) {
            setError(res.data.errors)
          }
        });        
        break;   

      default:
        break;
    }

  }

  if (loading) {
        
  }
    var checkout_HTML = "";

    if (cart.length > 0) {
      checkout_HTML = <div>
              <div className="row">

                <div className="col-md-7">
                  <div className="card">
                    <div className="card-header">
                      <h5>Basic Information</h5>
                    </div>
                    <div className="card-body">
                      {/* first name field */}
                      <div className="row">
                          <div className="col-md-6">
                            <div className="form-group mb-2">
                              <label htmlFor="inputName">First Name: </label>
                              <input type="text" name='first_name' onChange={handleInput} value={form.first_name} className="form-control" />
                              <span className="text-danger">{error.first_name}</span>
                            </div>
                          </div>
                      
                          {/* first name field */}
                      
                          <div className="col-md-6">
                            <div className="form-group mb-2">
                              <label htmlFor="inputName">Last Name: </label>
                              <input type="text" name='last_name' onChange={handleInput} value={form.last_name} className="form-control" />
                              <span className="text-danger">{error.last_name}</span>
                            </div>
                          </div>
                      
                          {/* first name field */}
                      
                          <div className="col-md-6">
                            <div className="form-group mb-2">
                              <label htmlFor="inputName">Phone: </label>
                              <input type="text" name='phone' onChange={handleInput} value={form.phone}  className="form-control" />
                              <span className="text-danger">{error.phone}</span>
                            </div>
                          </div>
                      
                          {/* first name field */}
                      
                          <div className="col-md-6">
                            <div className="form-group mb-2">
                              <label htmlFor="inputName">Email Address: </label>
                              <input type="text" name='email' onChange={handleInput} value={form.email} className="form-control" />
                              <span className="text-danger">{error.email}</span>
                            </div>
                          </div>
                      
                          {/* first name field */}
                      
                          <div className="col-md-12">
                            <div className="form-group mb-2">
                              <label htmlFor="inputName">Address: </label>
                              <textarea name="address" onChange={handleInput} value={form.address} className='form-control' id="" cols="5" rows="3"></textarea>
                              <span className="text-danger">{error.address}</span>
                            </div>
                          </div>
                      
                        {/* first name field */}
                      
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <label htmlFor="inputName">City: </label>
                              <input type="text" name='city' onChange={handleInput} value={form.city} className="form-control" />
                              <span className="text-danger">{error.city}</span>
                            </div>
                          </div>
                      
                        {/* first name field */}
                      
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <label htmlFor="inputName">State: </label>
                              <input type="text" name='state' onChange={handleInput} value={form.state} className="form-control" />
                              <span className="text-danger">{error.state}</span>
                            </div>
                          </div>
                      
                        {/* first name field */}
                      
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <label htmlFor="inputName">Zip Code: </label>
                              <input type="text" name='zip_code' onChange={handleInput} value={form.zip_code} className="form-control" />
                              <span className="text-danger">{error.zip_code}</span>
                            </div>
                          </div>
                          <div className="row">
                            <hr/>
                            <div className="col-md-2"></div>
                            <div className="col-md-9">
                              <button type='submit' onClick={ (e) => submitOrder(e, 'cod') } className="btn btn-outline-primary text-center me-2">Place Order</button>
                              <button type='submit' onClick={ (e) => submitOrder(e, 'razorpay') } className="btn btn-outline-success text-center me-2">Pay with Razorpay</button>
                              <button type='submit' onClick={ (e) => submitOrder(e, 'paypal') } className="btn btn-outline-warning text-center">Pay with PayPal</button>
                            </div>
                            <div className="col-md-1"></div>
                          </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <table className='table table-bordered table-striped'>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        cartTotal += item.product.selling_price * item.product_quantity;
                          return (
                            <tr key={item.id}>
                                <td>{item.product.name}</td>
                                <td className=' text-center'>{item.product.selling_price}</td>
                                <td className=' text-center'>{item.product_quantity}</td>
                                <td className=' text-center'>{item.product.selling_price * item.product_quantity}</td>
                            </tr>
                          )
                      })}
                      <tr>
                        <td colSpan="2" className='text-end fw-bold'>Grand Total</td>
                        <td colSpan="2" className='text-end fw-bolder pr-4 text-green'>{cartTotal}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div> 
      </div>
    } else {
      checkout_HTML = <div>
                        <div className="card card-body text-center py-5 shadow-sm">
                            <h4>Your Shopping Cart is Empty. Add items to cart before checkout</h4>
                        </div>        
                      </div>      
    }

    return (
      <div>
        {/*  Modal  */}
        <div class="modal fade" id="paypalModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
          {/* style="border: red 6px solid;" */}
            <div class="modal-content border-outline-warning">
              <div class="modal-header bg-primary text-center">
                <h5 class="modal-title" id="exampleModalLabel">PayPal Payment Gateway</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {/* <hr/> */}
                <PayPalButton
                  createOrder={(data, actions) => createOrder(data, actions)}
                  onApprove={(data, actions) => onApprove(data, actions)}
                />
              </div>
            </div>
          </div>
        </div>

         <div className="py-3 bg-warning">
            <div className="container">
              <h6>Home / Checkout</h6>
            </div>
         </div> 
         <div className="py-4">
            <div className="container">
                { checkout_HTML }
            </div>
         </div> 

      </div>
    )
}

export default Checkout;
