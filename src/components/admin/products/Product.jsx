import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
// import swal from "sweetalert";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);
    useEffect(() => {
      document.title = "All Products";
      axios.get(`/api/products`).then(res => {
        if (res.data.status === 200) {
           setProduct(res.data.product);
        }
        setLoading(false);
      })
    }, []);


    var product_HTMLTABLE = "";
    if (loading) {
      return (
        <div style={{marginTop: "100px"}}>
          <center>
            <img src={require(`../../../assets/spiner.gif`)} width="250" height="250" alt="loading"/>
          </center>
        </div>
        
       )
    } else {
      var productStatus = '';

      product_HTMLTABLE = 
      products.map((item) => {
        if (item.status === 0) {
          productStatus = <i className='text-success h5'>Shown</i>
        } else if (item.status === 1) {
          productStatus = <i className='text-danger h5'>Hidden</i>
        }
         return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category.name}</td>
              <td>{item.name}</td>
              <td>{item.selling_price}</td>
              <td><img src={`http://localhost:8000/${item.image}`} width="50px" alt={item.name} /></td>
              <td>{productStatus}</td>
              <td>
                <Link to={`edit-product/${item.id}`}><i className="far fa-edit" title="Edit"></i></Link> &nbsp;
                {/* <i className="fa fa-trash text-danger" onClick={(e) => deleteProduct(e, item.id)} title="Delete"></i> */}
              </td>
            </tr>
         )
      })
    }

    return (
      // <div className="content">
      //   <div className="container-fluid">
      //     <div className="row">
      //       <div className="col-12">

            <div className="card">
                <div className="card-header">
                  <h3 className="card-title">All Products List</h3>
                  <Link to="/admin/add-product" className="btn btn-outline-primary btn-sm float-end">+ Add Product</Link>
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">
                  <table id="example1" className="table table-bordered table-striped table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Cattegory Name</th>
                        <th>Product Name</th>
                        <th>Selling Price</th>
                        <th>Image</th>
                        <th>Product Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {product_HTMLTABLE}
                     
                    </tbody>
                    <tfoot>
                      <tr>
                          <th>ID</th>
                          <th>Cattegory Name</th>
                          <th>Product Name</th>
                          <th>Selling Price</th>
                          <th>Image</th>
                          <th>Product Status</th>
                          <th>Action</th>
                        </tr>
                    </tfoot>
                  </table>
                </div>
                {/* <!-- /.card-body --> */}
            </div> 

      //       {/* </div>
      //     </div>
      //   </div>
      // </div> */}
    )
}

export default Product;
