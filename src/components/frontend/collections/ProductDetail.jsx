import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';

 const ProductDetail = (props) => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]); 
    const [quantity, setQuantity] = useState(1)   

    //Quantity Increment/Decrement in hooks start
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)    
        }      
    }
    
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1)    
        }     
    }
     //Quantity Increment/Decrement in hooks end

    useEffect(() => {
        let isMounted = true;
        const category_slug = props.match.params.category;
        const product_slug = props.match.params.product;

        axios.get(`/api/productDetail/${category_slug}/${product_slug}`).then(res => {
            if (isMounted) {
                if (res.data.status === 200) {
                   setProduct(res.data.product); 
                   setLoading(false);
                } else if (res.data.status === 404) {
                    swal("Warning", res.data.message, "error");
                    history.push('/collections');
                }               
            }
        }).catch(() => {});          
       
        return () => {
            isMounted = false;
        }
    }, [props.match.params.category, props.match.params.product, history]);  

    const handleAddToCart = (e) => {
        e.preventDefault();

        const data = {
            product_id: product.id,
            quantity: quantity
        }

        axios.post(`/api/add-to-cart`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, 'success');
            } else if(res.data.status === 409) {
                // Already added to cart
                swal("Success", res.data.message, 'info');
            } else if(res.data.status === 404) {
                swal("Error", res.data.message, 'error');
            } else if(res.data.status === 401) {
                swal("Warning", res.data.message, 'warning');
            }
        });
    }

    if (loading) {
        return <h4>Loading Product...</h4>
    } else {
        var available_product = '';
        if (product.quantity > 0) {
            available_product = 
            <div>
                <label htmlFor="InStock" className="btn-sm btn-success px-4 mt-2">In Stock</label>
                <div className="row">
                    <div className="col-md-3 mt-3">
                        <div className="input-group">
                            <button type='button' onClick={handleDecrement} className="input-group-text">-</button>                           
                            <div className="form-control text-center w-50">{quantity}</div>
                            <button type='button' onClick={handleIncrement} className="input-group-text">+</button>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <button onClick={handleAddToCart} className="btn btn-primary w-100">Add To Cart</button>
                    </div>
                </div>                
            </div>
        } else {
            available_product = 
            <div>
                <label htmlFor="InStock" className="btn-sm btn-danger px-4 mt-2">Out of Stock</label>
            </div>               
        }

    }

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Collections / {product.category.name} / {product.name}</h6>
                </div>
            </div>

            <div className="pg-3">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-md-4 border-end">
                            <img src={`http://localhost:8000/${product.image}`} alt={product.name} className='w-100' />
                        </div>
                        <div className="col-md-8">
                            <h4 className='mt-2'>
                               {product.name}
                                <span className="float-end badge btn-sm btn-danger badge-pill mt-2">{product.brand}</span>
                            </h4>
                            <p>{product.description}</p>
                            <h4 className="mb-1">
                                Rs: {product.selling_price} &nbsp;
                                <s className="sm-2"> Rs: <span className=' text-danger'>{product.original_price}</span> </s>
                            </h4>
                            <div>
                                {available_product}
                            </div>
                            <button type='button' className="btn btn-danger mt-3">Add To Wishlist</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default  ProductDetail
