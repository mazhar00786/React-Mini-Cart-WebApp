import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
    return (
      <div className='content-header'>
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
            </div>
            {/* <!-- /.col --> */}
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/admin/dashboard">Home</Link></li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
            {/* <!-- /.col --> */}
            </div>
            {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
    )
}

export default DashboardHeader;
