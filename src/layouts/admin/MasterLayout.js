import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//    {/* ===================================================== */}
// C:\xampp\htdocs\Project-react\reactecom\node_modules\bootstrap\dist


// {/* <!-- Font Awesome --> */}
import '../../assets/admin/plugins/fontawesome-free/css/all.min.css';
// {/* <!-- Ionicons --> */}

// import '../../assets/admin/dist/css/bootstrap.min.css';
// {/* <!-- Tempusdominus Bootstrap 4 --> */}
import '../../assets/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
// {/* <!-- iCheck --> */}
import '../../assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
// {/* <!-- JQVMap --> */}
import '../../assets/admin/plugins/jqvmap/jqvmap.min.css';
// {/* <!-- Theme style --> */}
import '../../assets/admin/dist/css/adminlte.min.css';
// {/* <!-- overlayScrollbars --> */}
import '../../assets/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
// {/* <!-- Daterange picker --> */}
// <link rel="stylesheet" href="">
import '../../assets/admin/plugins/daterangepicker/daterangepicker.css';
// {/* <!-- summernote --> */}
// <link rel="stylesheet" href="">
import '../../assets/admin/plugins/summernote/summernote-bs4.min.css';

// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/** ================= Datatable Css Section ============================= */
import '../../assets/admin/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css';
import '../../assets/admin/plugins/datatables-responsive/css/responsive.bootstrap4.min.css';
import '../../assets/admin/plugins/datatables-buttons/css/buttons.bootstrap4.min.css';


/** ================= Javascript Section ============================= */
// <!-- jQuery -->
import '../../assets/admin/plugins/jquery/jquery.min.js';
// <!-- jQuery UI 1.11.4 -->
import '../../assets/admin/plugins/jquery-ui/jquery-ui.min.js';
// <!-- Bootstrap 4 -->
import '../../assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js';
// <!-- overlayScrollbars -->
import '../../assets/admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
// <!-- AdminLTE App -->
import '../../assets/admin/dist/js/adminlte.js';



import routes from '../../routes/routes.js';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import Footer from './Footer';
import DashboardHeader from './DashboardHeader';



const MasterLayout = () => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div className="wrapper">
                {/* Preloader */}
                {/* <Preloader/> */}

                {/* Navbar */}
                <Navbar />
                {/* /Navbar */}

                {/* Main Sidebar Container */}
                <Sidebar/>
                {/* //End Main Sidebar Container */}

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                        <DashboardHeader/>
                    {/* <!-- /.content-header --> */}

                    {/* <!-- Main content --> */}
                    
                    <section className="content">
                        <div className="container-fluid">
                            <Switch>
                                { routes.map((route, idx) => {
                                    return (
                                        route.component && (
                                            <Route 
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={(props) =>(
                                                    <route.component {...props} />
                                                )}
                                            />
                                        )
                                    )
                                })}
                                <Redirect from="/admin" to="/admin/dashboard" />
                            </Switch>

                        </div>
                    </section> 
                    {/* <!-- /.Section content -->    */}

                </div>
                {/* /.content-wrapper */}

                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/*  Control sidebar content goes here  */}
                </aside>
               {/*  /.control-sidebar */}

               <div className='clearfix'></div>
                {/* Main Footer */}
                <Footer/>
                {/* Main Footer End */}
            </div>
        </div>
    )
}

export default MasterLayout;