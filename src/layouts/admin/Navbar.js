import React from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import swal from "sweetalert";

import User2 from '../../assets/admin/dist/img/user2-160x160.jpg';

const Navbar = () => {

  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();

    axios
      .post(`/api/logout`)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("name");
  

          //sweetaler
          swal("Success", res.data.message, "success");
          history.push("/");
        }
        
      })
      .catch(() => {});
  };


   return (
    <nav className="main-header navbar navbar-expand navbar-dark">
              {/* Left navbar links */} 
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars"></i></Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <Link to="/admin/dashboard" className="nav-link">Home</Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <Link to="/#" className="nav-link">Contact</Link>
                </li>
              </ul>
          

            <ul className="navbar-nav ml-auto">
              {/* <!-- Navbar Search --> */}
              <li className="nav-item">
                <Link className="nav-link" data-widget="navbar-search" to="#" role="button">
                  <i className="fas fa-search"></i>
                </Link>
                <div className="navbar-search-block">
                  <form className="form-inline">
                    <div className="input-group input-group-sm">
                      <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                      <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>    

              {/* <!-- Right navbar links --> */}      
              {/* <!-- Notifications Dropdown Menu --> */}
              <li className="nav-item dropdown">
                <Link className="nav-link" data-toggle="dropdown" to="#">
                  <i className="fas fa-bell"></i>
                  <span className="badge badge-warning navbar-badge">15</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span className="dropdown-item dropdown-header">15 Notifications</span>
                  <div className="dropdown-divider"></div>
                  <Link to="/#" className="dropdown-item">
                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/#" className="dropdown-item">
                    <i className="fas fa-users mr-2"></i> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/#" className="dropdown-item">
                    <i className="fas fa-file mr-2"></i> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/#" className="dropdown-item dropdown-footer">See All Notifications</Link>
                </div>
              </li>   
              {/* <li>   
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {AuthButton}
                </div>
              </li> */}

              <li className="nav-item dropdown user-menu">
                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                  <img src={User2} className="user-image img-circle elevation-2" alt="UserImage"/>
                  <span className="d-none d-md-inline">Alexander Pierce</span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  {/* <!-- User image --> */}
                  <li className="user-header bg-primary">
                    <img src={User2} className="img-circle elevation-2" alt="UserImage"/>

                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  {/* <!-- Menu Body --> */}
                  <li className="user-body">
                    <div className="row">
                      <div className="col-4 text-center">
                        <Link to="#">Followers</Link>
                      </div>
                      <div className="col-4 text-center">
                        <Link to="#">Sales</Link>
                      </div>
                      <div className="col-4 text-center">
                        <Link to="#">Friends</Link>
                      </div>
                    </div>
                    {/* <!-- /.row --> */}
                  </li>
                  {/* <!-- Menu Footer--> */}
                  <li className="user-footer">
                    <Link to="#" className="btn btn-default btn-flat float-left">Profile</Link>
                    <Link to="#" onClick={handleLogout} className="btn btn-default float-right">Sign out</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link"  data-widget="fullscreen" data-controlsidebar-slide="true" to="#" role="button">
                  <i className="fas fa-expand-arrows-alt"></i>
                </Link>
              </li>
            </ul>
      </nav>
    )
}

export default Navbar;