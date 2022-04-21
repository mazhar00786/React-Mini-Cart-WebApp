import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';

const ViewProduct = (props) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const history = useHistory();

    const productCount = product.length;
    useEffect(() => {
        let isMounted = true;
        const slug = props.match.params.slug;
        axios.get(`/api/fetchProducts/${slug}`).then(res => {
            if (isMounted) {
                if (res.data.status === 200) {
                   setProduct(res.data.product_data.product); 
                   setCategory(res.data.product_data.category);
                   setLoading(false);
                } else if (res.data.status === 400) {
                    swal("Warning", res.data.message, "error");
                    history.pushState('/collections');
                } else if (res.data.status === 404) {
                    swal("Warning", res.data.message, "error");
                    history.pushState('/collections');
                }                
            }
        }).catch(() => {})            
       
        return () => {
            isMounted = false;
        }
    }, [props.match.params.slug , history]);
    
    if (loading) {
        return <h6>Loading Product...</h6>
    } else {
        var productList = "";

        if (productCount) {
            productList = product.map((item, idx) => {
                return (
                    <div className="col-md-4 mt-4" key={idx}>
                      <div className="card">
                        <Link to={`/collections/${item.category.slug}/${item.slug}`}>  
                            <img src={`http://localhost:8000/${item.image}`} className="w-80" style={{height: "300px"}} alt={item.name} />
                        </Link>
                        <div className='card-body'>
                          <Link to={`/collections/${item.category.slug}/${item.slug}`} className="text display none">
                            <h5>{item.name}</h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                 )
            })            
        } else {
            productList =
            <div className="col-md-12 pt-4 ps-4">
                <h4>No Product Available for {category.name}</h4>
            </div>
        }
    }

    return (
        <div>

            <div className="py-3 bg-warning">
            <div className="container">
                <h6>Collections / {category.name}</h6>
            </div>
            </div>

            <div className="pg-3">
            <div className="container">
                <div className="row">
                  {productList}
                </div>    
            </div>
            </div>

        </div>
     )
}

export default ViewProduct;