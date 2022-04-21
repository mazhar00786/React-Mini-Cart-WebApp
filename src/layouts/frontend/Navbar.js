import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import swal from "sweetalert";

const Navbar = () => {
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    // axios.defaults.withCredentials = true
    axios.get("/sanctum/csrf-cookie").then((response) => {
    axios
      .post(`api/logout`)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('name');
          //sweetaler
          swal("Success", res.data.message, "success");
          history.push("/");
        }
      });
    });
  };

  var AuthButton = "";

  if (!localStorage.getItem("auth_token")) {
    AuthButton = (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/collections">
              Collections
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/register">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    AuthButton = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link active profile"
            aria-current="page"
            to="/profile"
          >
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <button type="button" onClick={handleLogout} className="btn btn-danger text-white">
            Logout
          </button>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 float-right">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/collections">
                Collections
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
          {AuthButton}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
