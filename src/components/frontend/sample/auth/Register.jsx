import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// import Navbar from "../../../layouts/frontend/Navbar";

import swal from "sweetalert";

const styled = { color: "red", fontSize: '16px' };

const Register = () => {
  const history = useHistory();

  const [form, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...form, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post(`/api/register`, data)
        .then(res => {
          if (res.data.status === 200) {
            localStorage.setItem("auth_token", res.data.token);
            localStorage.setItem("name", res.data.name);
            //sweetaler
            swal("Success", res.data.message, "success");
            history.push("/");
          } 
          if (res.data.status === 422) {
            setRegister({ ...form, error_list: res.data.errors });
          }
          setTimeout(...form, 2000)
        })
        .catch((e) => {});
    });
  };


  return (
    <div className="container py-5">
      <main id="main" className="main-site left-sidebar">

        <div className="container">

          <div className="wrap-breadcrumb">
            <ul>
              <li className="item-link"><Link to="#" className="link">home</Link></li>
              <li className="item-link"><span>Register</span></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12 col-md-offset-3">							
              <div className=" main-content-area">
                <div className="wrap-login-item " style={{marginLeft: "300px"}}>
                  <div className="register-form form-item ">
                    <form onSubmit={registerSubmit} className="form-stl" name="frm-login">
                      <fieldset className="wrap-title">
                        <h3 className="form-title">Create an account</h3>
                        
                      </fieldset>									
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-reg-lname">Name*</label>
                        <input type="text" id="name" name="name" value={form.name} onChange={handleInput} placeholder="Last name*"/>
                        <input type="hidden" name="_token" value="csrf_token()"/>
                        <span style={styled}>{form.error_list.name}</span>
                      </fieldset>
                      <fieldset className="wrap-input">
                        <label htmlFor="frm-reg-email">Email Address*</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleInput} placeholder="Email address"/>
                        <span style={styled}>{form.error_list.email}</span>
                      </fieldset>
             
                      <fieldset className="wrap-input item-width-in-half left-item ">
                        <label htmlFor="frm-reg-pass">Password *</label>
                        <input type="password" id="frm-reg-pass" name="password" value={form.password} onChange={handleInput} placeholder="Password"/>
                        <span style={styled}>{form.error_list.password}</span>
                      </fieldset>
                      <fieldset className="wrap-input item-width-in-half ">
                        <label htmlFor="frm-reg-cfpass">Confirm Password *</label>
                        <input type="password" id="frm-reg-cfpass" value={form.password_confirmation} onChange={handleInput} name="password_confirmation" placeholder="Confirm Password"/>
                        <span style={styled}>{form.error_list.password_confirmation}</span>
                      </fieldset>
                      <fieldset className="wrap-functions">
                        <label className="remember-field">
                          <input name="remember" id="new-letter" value="remember" type="checkbox"/><span>Remember Me</span>
                        </label>
                        
                      </fieldset>
                       <input type="submit" className="btn btn-sign" value="Register" name="register"/>
                       <Link className="link-function left-position mt-4" to="/login" title="Click To Login?">Already have an Account. Login Here?</Link>
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
    </div>
  );
};

export default Register;
