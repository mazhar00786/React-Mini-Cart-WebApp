import React from 'react';
import { Link } from "react-router-dom";

const Brand = () => {
    return (
      <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
          <div className="card">
              <div className="card-header">
                <h3 className="card-title">All Brands List</h3>
                <Link to="/admin/add-brand" className="btn btn-outline-primary btn-sm float-end">+ Add Brand</Link>
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
                     {/* {category_HTMLTABLE} */}
                     <tr><td>Brands goes here....</td></tr>
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
    )
}

export default  Brand