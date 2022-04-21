import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';
// import swal from "sweetalert";

const Order = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    document.title = "All Orders";
    axios.get(`/api/admin/orders`).then((res) => {
      if (res.data.status === 200) {
        setOrder(res.data.orders);
      }
      setLoading(false);
    });
  }, []);

  const deleteOrdre = () => {}

  if (loading) {
    return (
      <div style={{ marginTop: "100px" }}>
        <center>
          <img
            src={require(`../../../assets/spiner.gif`)}
            width="250"
            height="250"
            alt="loading"
          />
        </center>
      </div>
    );
  } else {
      var order_HTMLTABLE = '';
      order_HTMLTABLE = 
      order.map((item) => {
        // if (item.status === 0) {
        //   productStatus = <i className='text-success h5'>Shown</i>
        // } else if (item.status === 1) {
        //   productStatus = <i className='text-danger h5'>Hidden</i>
        // }
         return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.tracking_no}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              {/* <td><img src={`http://localhost:8000/${item.image}`} width="50px" alt={item.name} /></td> */}
              {/* <td>{}</td> */}
              <td>
                <Link to={`show-order/${item.id}`}><i className="far fa-eye" title="Show"></i></Link> &nbsp; | &nbsp;
                <Link to="#"><i className="fa fa-trash text-danger" onClick={(e) => deleteOrdre(e, item.id)} title="Delete"></i> </Link>
              </td>
            </tr>
         )
      })      
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Orders List</h3>
        {/* <Link
          to="/admin/add-product"
          className="btn btn-outline-primary btn-sm float-end"
        >
          + Add Product
        </Link> */}
      </div>
      {/* <!-- /.card-header --> */}
      <div className="card-body">
        <table
          id="example1"
          className="table table-bordered table-striped table-hover"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Tracking No</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>Image</th>
              <th>Product Status</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { order_HTMLTABLE }
          </tbody>
          <tfoot>
            <tr>
            <th>ID</th>
              <th>Tracking No</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>Image</th>
              <th>Product Status</th> */}
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* <!-- /.card-body --> */}
    </div>
  );
};

export default Order;
