
import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

// import Navbar from "../../../layouts/frontend/Navbar";

import axios from "axios";
import swal from "sweetalert";


const styled = { color: "red" };

const Login = () => {

  const history = useHistory();

  const [form, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
    error: ''
  });

  const emailHandler = (e) => {
    e.persist();
    setLogin({ ...form, [e.target.name]: e.target.value })
  }

  const passwordHandler = (e) => {
    e.persist();
    setLogin((prevState) => {
        return{...prevState, password: e.target.value}
    })
  }

  const userLogin = (e) => {
    e.preventDefault()

    const data = {
        email: form.email,
        password: form.password
    }

    axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post(`api/login`, data).then((res) => {
            if(res.data.status === 200) {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("name", res.data.name)
              //
              swal("Success", res.data.message, 'success');

              if (res.data.role === 'admin') {
                history.push('/admin/dashboard');
              } else {
                history.push('/');  
              }
              
            } else if (res.data.status === 401) {
                swal("401", res.data.message, 'error');
                // setLogin({ ...form, error: res.data.message })
            } else {
              setLogin({ ...form, error_list: res.data.errors })
            }
        }).catch(() => {})
    });
  }

  return (
      <main id="main" className="main-site left-sidebar">

        <div className="container">

          <div className="wrap-breadcrumb">
            <ul>
              <li className="item-link"><Link to="/" className="link">Home</Link></li>
              <li className="item-link"><span>Login</span></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">
              <div className=" main-content-area">
                <div className="wrap-login-item" style={{marginLeft: "300px"}}>						
                  <div className="login-form form-item form-stl">
                    <form name="frm-login" onSubmit={userLogin}>
                      <fieldset className="wrap-title">
                        <h3 className="form-title">Log in to your account</h3>										
                      </fieldset>
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-login-uname">Email Address:</label>
                        <input type="text" id="frm-login-uname" name="email" onChange={emailHandler} value={form.email} placeholder="Type your email address"/>
                        <span style={styled}>{form.error_list.email}</span>
                        <span style={styled}>{form.error.email}</span>
                      </fieldset>
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-login-pass">Password:</label>
                        <input type="password" id="frm-login-pass" name="pass" onChange={passwordHandler} value={form.password} placeholder="************"/>
                        <span style={styled}>{form.error_list.password}</span>  
                      </fieldset>
                      
                      <fieldset className="wrap-input">
                        <label className="remember-field">
                          <input className="frm-input " name="rememberme" id="rememberme" value="forever" type="checkbox"/><span>Remember me</span>
                        </label>
                        <Link className="link-function left-position" to="#" title="Forgotten password?">Forgotten password?</Link>
                      </fieldset>
                      <input type="submit" className="btn btn-submit" value="Login" name="submit"/>
                      <Link className="link-function left-position mt-4" to="/register" title="Create Account?">Create Account Here?</Link>
                    </form>
                  </div>												
                </div>
              </div>
              {/* <!--end main products area-->		 */}
            </div>
          </div>
          {/* <!--end row--> */}

        </div>
        {/* <!--end container--> */}

      </main>

  );
};

export default Login;
















