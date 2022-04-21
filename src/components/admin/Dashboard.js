import React from "react";
import {Link} from 'react-router-dom';

//{/* AdminLTE dashboard demo (This is only for demo purposes) */}
// import '../../../node_modules/admin-lte/dist/js/pages/dashboard2.js';
const style = `
font-size: 20px
`

function Dashboard () {
    return (
        
        <div>
          {/* <h3>Admin Dashboard goes here....</h3> */}
         {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
           {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>

                <p>New Orders</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
         {/* ./col */}
          <div className="col-lg-3 col-6">
           {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup className={style}>%</sup></h3>

                <p>Bounce Rate</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
         {/* ./col */}
          <div className="col-lg-3 col-6">
           {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>

                <p>User Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
         {/* ./col */}
          <div className="col-lg-3 col-6">
           {/* small box */}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          </div>
         {/* ./col */}
        </div>
       {/* /.row */}	  
          {/* Info boxes */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">CPU Traffic</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}

          {/* fix for small devices only */}
          {/* <div className="clearfix hidden-md-up"></div> */}

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Sales</span>
                <span className="info-box-number">760</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">New Members</span>
                <span className="info-box-number">2,000</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              
              <div className="card-header">
                <h5 className="card-title">Monthly Recap Report</h5>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                      <i className="fas fa-wrench"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" role="menu">
                      <Link to="#" className="dropdown-item">Action</Link>
                      <Link to="#" className="dropdown-item">Another action</Link>
                      <Link to="#" className="dropdown-item">Something else here</Link>
                      <Link to="#" className="dropdown-divider"></Link>
                      <Link to="#" className="dropdown-item">Separated link</Link>
                    </div>
                  </div>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <p className="text-center">
                      <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                    </p>

                    <div className="chart">
                      {/* Sales Chart Canvas */}
                      {/* <canvas id="salesChart" height="180" style="height: 180px;"></canvas> */}
                    </div>
                    {/* /.chart-responsive */}
                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    <p className="text-center">
                      <strong>Goal Completion</strong>
                    </p>

                    <div className="progress-group">
                      Add Products to Cart
                      <span className="float-right"><b>160</b>/200</span>
                      <div className="progress progress-sm">
                        {/* <div className="progress-bar bg-primary" style="width: 80%"></div> */}
                      </div>
                    </div>
                    {/* /.progress-group */}

                    <div className="progress-group">
                      Complete Purchase
                      <span className="float-right"><b>310</b>/400</span>
                      <div className="progress progress-sm">
                        {/* <div className="progress-bar bg-danger" style="width: 75%"></div> */}
                      </div>
                    </div>

                    {/* /.progress-group */}
                    <div className="progress-group">
                      <span className="progress-text">Visit Premium Page</span>
                      <span className="float-right"><b>480</b>/800</span>
                      <div className="progress progress-sm">
                        {/* <div className="progress-bar bg-success" style="width: 60%"></div> */}
                      </div>
                    </div>

                    {/* /.progress-group */}
                    <div className="progress-group">
                      Send Inquiries
                      <span className="float-right"><b>250</b>/500</span>
                      <div className="progress progress-sm">
                        {/* <div className="progress-bar bg-warning" style="width: 50%"></div> */}
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* ./card-body */}
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 17%</span>
                      <h5 className="description-header">$35,210.43</h5>
                      <span className="description-text">TOTAL REVENUE</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-warning"><i className="fas fa-caret-left"></i> 0%</span>
                      <h5 className="description-header">$10,390.90</h5>
                      <span className="description-text">TOTAL COST</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 20%</span>
                      <h5 className="description-header">$24,813.53</h5>
                      <span className="description-text">TOTAL PROFIT</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                  {/* /.col */}
                  <div className="col-sm-3 col-6">
                    <div className="description-block">
                      <span className="description-percentage text-danger"><i className="fas fa-caret-down"></i> 18%</span>
                      <h5 className="description-header">1200</h5>
                      <span className="description-text">GOAL COMPLETIONS</span>
                    </div>
                    {/* /.description-block */}
                  </div>
                </div>
                {/* /.row */}
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}

        {/* Main row */}
        <div className="row">
         
        <div className="col-lg-6">
            <div className="card">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h3 className="card-title">Online Store Visitors</h3>
                  <Link to="#">View Report</Link>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <p className="d-flex flex-column">
                    <span className="text-bold text-lg">820</span>
                    <span>Visitors Over Time</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                      <i className="fas fa-arrow-up"></i> 12.5%
                    </span>
                    <span className="text-muted">Since last week</span>
                  </p>
                </div>
                {/* /.d-flex */}

                <div className="position-relative mb-4">
                  <canvas id="visitors-chart" height="200"></canvas>
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <span className="mr-2">
                    <i className="fas fa-square text-primary"></i> This Week
                  </span>

                  <span>
                    <i className="fas fa-square text-gray"></i> Last Week
                  </span>
                </div>
              </div>
            </div>
            {/* /.card */}

            <div className="card">
              <div className="card-header border-0">
                <h3 className="card-title">Products</h3>
                <div className="card-tools">
                  <Link to="#" className="btn btn-tool btn-sm">
                    <i className="fas fa-download"></i>
                  </Link>
                  <Link to="#" className="btn btn-tool btn-sm">
                    <i className="fas fa-bars"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-striped table-valign-middle">
                  <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>More</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <img src={require("../../assets/admin/dist/img/default-150x150.png")} alt="Product 1" className="img-circle img-size-32 mr-2"/>
                      Some Product
                    </td>
                    <td>$13 USD</td>
                    <td>
                      <small className="text-success mr-1">
                        <i className="fas fa-arrow-up"></i>
                        12%
                      </small>
                      12,000 Sold
                    </td>
                    <td>
                      <Link to="#" className="text-muted">
                        <i className="fas fa-search"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={require("../../assets/admin/dist/img/default-150x150.png")} alt="Product 1" className="img-circle img-size-32 mr-2"/>
                      Another Product
                    </td>
                    <td>$29 USD</td>
                    <td>
                      <small className="text-warning mr-1">
                        <i className="fas fa-arrow-down"></i>
                        0.5%
                      </small>
                      123,234 Sold
                    </td>
                    <td>
                      <Link to="#" className="text-muted">
                        <i className="fas fa-search"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={require("../../assets/admin/dist/img/default-150x150.png")} alt="Product 1" className="img-circle img-size-32 mr-2"/>
                      Amazing Product
                    </td>
                    <td>$1,230 USD</td>
                    <td>
                      <small className="text-danger mr-1">
                        <i className="fas fa-arrow-down"></i>
                        3%
                      </small>
                      198 Sold
                    </td>
                    <td>
                      <Link to="#" className="text-muted">
                        <i className="fas fa-search"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={require("../../assets/admin/dist/img/default-150x150.png")} alt="Product 1" className="img-circle img-size-32 mr-2"/>
                      Perfect Item
                      <span className="badge bg-danger">NEW</span>
                    </td>
                    <td>$199 USD</td>
                    <td>
                      <small className="text-success mr-1">
                        <i className="fas fa-arrow-up"></i>
                        63%
                      </small>
                      87 Sold
                    </td>
                    <td>
                      <Link to="#" className="text-muted">
                        <i className="fas fa-search"></i>
                      </Link>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h3 className="card-title">Sales</h3>
                  <Link to="#">View Report</Link>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <p className="d-flex flex-column">
                    <span className="text-bold text-lg">$18,230.00</span>
                    <span>Sales Over Time</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                      <i className="fas fa-arrow-up"></i> 33.1%
                    </span>
                    <span className="text-muted">Since last month</span>
                  </p>
                </div>
                {/* /.d-flex */}

                <div className="position-relative mb-4">
                  <canvas id="sales-chart" height="200"></canvas>
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <span className="mr-2">
                    <i className="fas fa-square text-primary"></i> This year
                  </span>

                  <span>
                    <i className="fas fa-square text-gray"></i> Last year
                  </span>
                </div>
              </div>
            </div>
            {/* /.card */}

            <div className="card">
              <div className="card-header border-0">
                <h3 className="card-title">Online Store Overview</h3>
                <div className="card-tools">
                  <Link to="#" className="btn btn-sm btn-tool">
                    <i className="fas fa-download"></i>
                  </Link>
                  <Link to="#" className="btn btn-sm btn-tool">
                    <i className="fas fa-bars"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                  <p className="text-success text-xl">
                    <i className="ion ion-ios-refresh-empty"></i>
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-success"></i> 12%
                    </span>
                    <span className="text-muted">CONVERSION RATE</span>
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                  <p className="text-warning text-xl">
                    <i className="ion ion-ios-cart-outline"></i>
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-warning"></i> 0.8%
                    </span>
                    <span className="text-muted">SALES RATE</span>
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <p className="text-danger text-xl">
                    <i className="ion ion-ios-people-outline"></i>
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-down text-danger"></i> 1%
                    </span>
                    <span className="text-muted">REGISTRATION RATE</span>
                  </p>
                </div>
                {/* /.d-flex */}
              </div>
            </div>
          </div>
          {/* /.col-md-6 */}

        </div>
        {/* /.row */}
		          
        </div>
     
    )
}

export default Dashboard;