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
    <div>
      {/* <Navbar /> */}
      <div className="container py-5 justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="row form-group mb-3">
                    <label className="col-sm-4">Name:</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        name="name"
                        onChange={handleInput}
                        value={form.name}
                        className="form-control"
                      />
                      <input
                        type="hidden"
                        name="_token"
                        value="<?php echo csrf_token(); ?>"
                      ></input>
                      <span style={styled}>
                        {form.error_list.name}
                      </span>
                    </div>
                  </div>
                  <div className="row form-group mb-3">
                    <label className="col-sm-4">Email:</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        name="email"
                        onChange={handleInput}
                        value={form.email}
                        className="form-control"
                      />
                      <span style={styled}>
                        {form.error_list.email}
                      </span>
                    </div>
                  </div>
                  <div className="row form-group mb">
                    <label className="col-sm-4">Password:</label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        onChange={handleInput}
                        value={form.password}
                        name="password"
                        className="form-control"
                      />
                      <span style={styled}>
                        {form.error_list.password}
                      </span>
                    </div>
                  </div>
                  <div className="row form-group mb">
                    <label className="col-sm-4">Confirm Password:</label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        onChange={handleInput}
                        value={form.password_confirmation}
                        name="password_confirmation"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <center>
                      <button type="submit" className="btn btn-outline-primary">
                        Register
                      </button>
                      
                    </center>
                    <Link className="link-function left-position mt-4" to="/login" title="Click To Login?">Already have an Account. Login Here?</Link>
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

export default Register;
