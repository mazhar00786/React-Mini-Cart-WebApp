import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';

const Cart = (props) => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]); 
    var cartTotal = 0;
     
    if (!localStorage.getItem('auth_token')) {
        history.push('/')
        swal("Not Authenticated", "Please login to access your cart", "warning")
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

    const handleDecrement = (cart_id) => {
        setCart(cart => 
            cart.map((item) => 
                cart_id === item.id ? {...item, product_quantity: item.product_quantity - (item.product_quantity > 1 ? 1 : 0)} : item
            )
        );
        updateCartQuantity(cart_id, "dec")
    }

    const handleIncrement = (cart_id) => {
        setCart(cart => 
            cart.map((item) => 
                cart_id === item.id ? {...item, product_quantity: item.product_quantity + (item.product_quantity < 10 ? 1 : 0)} : item
            )
        );
        updateCartQuantity(cart_id, "inc")
    }

    function updateCartQuantity(cart_id, scope) {
        axios.put(`/api/update-cartQuantity/${cart_id}/${scope}`).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, 'success');
            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, 'warning');
            }
        })
    }

    const deleteCartItem = (e, cart_id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                axios.delete(`/api/delete-cart/${cart_id}`).then(res => {
                    if (res.data.status === 200) {
                        swal("Success", res.data.message, 'success');
                        thisClicked.closest("tr").remove();
                    } else if (res.data.status === 404) {
                        swal("Error", res.data.message, 'error');
                    }
                })
    
            } else {
              swal("Cart Item is safe!");
            }
        });     
    }

    if (loading) {
        
    }

    var cart_HTML = '';

    if (cart.length > 0) {
        cart_HTML = <div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Total Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            cartTotal += item.product.selling_price * item.product_quantity;
                            return (
                                <tr key={item.id}>
                                    <td className='col-md-1'>
                                        <img src={`http://localhost:8000/${item.product.image}`} width="45" height="50" alt="proImage" />
                                    </td>
                                    <td className='col-md-6'>{item.product.name}</td>
                                    <td className='col-md-1 text-center'>{item.product.selling_price}</td>
                                    <td className='col-md-2'>
                                        <div className="input-group">
                                            <button type='button' onClick={() => handleDecrement(item.id)} className="input-group-text">-</button>
                                            <div className="form-control text-center" width="10%">{item.product_quantity}</div>
                                            <button type='button' onClick={() => handleIncrement(item.id)} className="input-group-text">+</button>
                                        </div>
                                    </td>
                                    <td className='col-md-2 text-center'>{item.product.selling_price * item.product_quantity}</td>
                                    <td className="col-md-1">
                                        <button type='button' onClick={(e) => deleteCartItem(e, item.id)} className="btn btn-danger btn-sm">Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='row'>
                <div className="col-md-8"></div>
                <div className="col-md-4 float-end">
                    <div className="card-body">
                        <h5>Sub Total: <span className="float-end">{cartTotal}</span></h5><hr/>
                        <h5>Grand Total: <span className="float-end">{cartTotal}</span></h5><hr/>
                        <Link to="/" className='btn btn-outline-success float-start'>Continue Shopping</Link> 
                        <Link to="/checkout" className='btn btn-outline-secondary float-end'>Check Out</Link>    
                    </div>
                </div>
            </div>

        </div>
    } else {
        cart_HTML = <div>
                        <div className="card card-body text-center py-5 shadow-sm">
                            <h4>Your Shopping Cart is Empty.</h4>
                        </div>
                    </div> 
    }

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Home / Cart</h6>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-body mt-4">
                                {cart_HTML}
                            </div>
                        </div>    

           
                    </div>
   
                </div>
            </div>
        </div>
    )
}

export default Cart
