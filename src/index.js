import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';


//css
import 'bootstrap/dist/css/bootstrap.min.css';
//js
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import "./assets/admin/dist/js/.eslintrc.json";
// import axios from 'axios';
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();