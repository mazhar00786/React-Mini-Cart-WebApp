
import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

// import Navbar from "../../../layouts/frontend/Navbar";

import axios from "axios";
import swal from "sweetalert";


// const styled = { color: "red" };

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

              if (res.data.role === "admin") {
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
    <div>
      {/* <Navbar /> */}
      <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Login</div>

                    <div className="card-body">
                        <form onSubmit={userLogin}>

                            <div className="row mb-3">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                                <div className="col-md-6">
                                    <input id="email" type="email" name="email" onChange={emailHandler} value={form.email} autoComplete="email" className="form-control" autoFocus/>
                                    <span className="text-danger">{form.error_list.email}</span>
                                    <span className="text-danger">{form.error.email}</span>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password:</label>

                                <div className="col-md-6">
                                    <input id="password" type="password" name="password" value={form.password} onChange={passwordHandler} className="form-control" autoComplete="current-password"/>
                                    <span className="text-danger">{form.error_list.password}</span>                            
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6 offset-md-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="remember" id="remember"/>

                                        <label className="form-check-label" htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row mb-0">
                                <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-outline-primary">
                                        Login
                                    </button>

                                        <Link className="btn btn-link" to="#">
                                            Forgot Your Password?
                                        </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
