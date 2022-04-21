import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../assets/admin/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";

import '../../../assets/admin/plugins/datatables-responsive/css/responsive.bootstrap4.min.css';
import '../../../assets/admin/plugins/datatables-buttons/css/buttons.bootstrap4.min.css';

/** ================= Javascript Section ============================= */

import '../../../assets/admin/plugins/datatables/jquery.dataTables.min.js';
import '../../../assets/admin/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
import '../../../assets/admin/plugins/datatables-responsive/js/dataTables.responsive.min.js';
import '../../../assets/admin/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';
import '../../../assets/admin/plugins/datatables-buttons/js/dataTables.buttons.min.js';

import axios from "axios";
import swal from "sweetalert";

// const styled = { color: "red"}

const Categories = () => {
  // const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [categorylist, setCategory] = useState([

  ]);

  useEffect(() => {
    axios.get(`/api/categories`).then(res => {
      if (res.data.status === 200) {
        setCategory(res.data.category)
      } 
      setLoading(false);
    })
  }, []);

  const deleteCategory = (e, id) => {
      e.preventDefault();
      const thisCategory = e.currentTarget;
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

          axios.delete(`/api/delete-category/${id}`).then(res => {

            if (res.data.status === 200) {
              thisCategory.closest("tr").remove()
              swal("Success", res.data.message, {icon: "success",})
              
            } else {
             swal("Success", res.data.message, 'success')
            //  thisClicked.innerText = "";
            }
          });

        } else {
          swal("Category is safe!");
        }
      });

  }
  
  var category_HTMLTABLE = "";
  if (loading) {
    return (
      <div style={{marginTop: "100px"}}>
        <center>
          <img src={require(`../../../assets/spiner.gif`)} width="250" height="250" alt="loading"/>
        </center>
      </div>
      
     )
  } else {
    category_HTMLTABLE =
    categorylist.map((item) => {
       return (
         <tr key={item.id}>
           <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.slug}</td>
           <td>{item.status}</td>
           <td>
             <Link to={`edit-category/${item.id}`}><i className="far fa-edit" title="Edit"></i></Link> &nbsp; | &nbsp;
             <i className="fas fa-trash text-danger" onClick={(e) => deleteCategory(e, item.id)} title="Delete"></i>
           </td>
         </tr>
       )
    })
  }

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <div className="card">
              <div className="card-header">
                <h3 className="card-title">All Categories Table</h3>
                <Link to="/admin/add-category" className="btn btn-outline-primary btn-sm float-end">+ Add Category</Link>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped table-hover">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                     {category_HTMLTABLE}
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
              {/* <!-- /.card-body --> */}
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
