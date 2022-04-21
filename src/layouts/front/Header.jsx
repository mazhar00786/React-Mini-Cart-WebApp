import React from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import swal from "sweetalert";

// const styled = {
//     fontSizr: "16px"
// }

const Header = () => {

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
  
    if (localStorage.getItem("auth_token")) {
      AuthButton = (
          
          <span className="link-term mercado-item-title ps-3 pe-3" title='logout' style={{color: '#ff2808'}}><i className='fa fa-power-off' onClick={handleLogout}></i></span>
      );
    }    

    return (
        <div>
                    
            {/* <!-- mobile menu --> */}
            <div className="mercado-clone-wrap">
                <div className="mercado-panels-actions-wrap">
                    <Link className="mercado-close-btn mercado-close-panels" to="#">x</Link>
                </div>
                <div className="mercado-panels"></div>
            </div>
            
            {/* <!--header--> */}
            <header id="header" className="header header-style-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="topbar-menu-area">
                            <div className="container">
                                <div className="topbar-menu left-menu">
                                    <ul>
                                        <li className="menu-item" >
                                            <Link title="Hotline: (+123) 456 789" to="#" ><span className="icon label-before fa fa-mobile"></span>Hotline: (+123) 456 789</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="topbar-menu right-menu">
                                    <ul>
                                    
                                        <li className="menu-item" ><Link title="Register or Login" to="/login">Login</Link></li>
                                        <li className="menu-item" ><Link title="Register or Login" to="/register">Register</Link></li>
                                        <li className="menu-item lang-menu menu-item-has-children parent">
                                            <Link title="English" to="#"><span className="img label-before"><img src={require("../../assets/frontend/images/lang-en.png")} alt="lang-en"/></span>English<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                                            <ul className="submenu lang" >
                                                <li className="menu-item" ><Link title="hungary" to="#"><span className="img label-before"><img src={require("../../assets/frontend/images/lang-hun.png")} alt="lang-hun"/></span>Hungary</Link></li>
                                                <li className="menu-item" ><Link title="german" to="#"><span className="img label-before"><img src={require("../../assets/frontend/images/lang-ger.png")} alt="lang-ger" /></span>German</Link></li>
                                                <li className="menu-item" ><Link title="french" to="#"><span className="img label-before"><img src={require("../../assets/frontend/images/lang-fra.png")} alt="lang-fre"/></span>French</Link></li>
                                                <li className="menu-item" ><Link title="canada" to="#"><span className="img label-before"><img src={require("../../assets/frontend/images/lang-can.png")} alt="lang-can"/></span>Canada</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children parent" >
                                            <Link title="Dollar (USD)" to="#">Dollar (USD)<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                                            <ul className="submenu curency" >
                                                <li className="menu-item" >
                                                    <Link title="Pound (GBP)" to="#">Pound (GBP)</Link>
                                                </li>
                                                <li className="menu-item" >
                                                    <Link title="Euro (EUR)" to="#">Euro (EUR)</Link>
                                                </li>
                                                <li className="menu-item" >
                                                    <Link title="Dollar (USD)" to="#">Dollar (USD)</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        
                        <div className="container">
                            <div className="mid-section main-info-area">
        
                                <div className="wrap-logo-top left-section">
                                    <Link to="/" className="link-to-home"><img src={require("../../assets/frontend/images/images1.jpg")} width="80" height="80" alt="mercado"/></Link>
                                </div>
        
                                <div className="wrap-search center-section">
                                    <div className="wrap-search-form">
                                        <form id="form-search-top" name="form-search-top">
                                            <input type="text" name="search" placeholder="Search here..."/>
                                            <button form="form-search-top" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                            <div className="wrap-list-cate">
                                                <input type="hidden" name="product-cate" value="0" id="product-cate"/>
                                                <Link to="#" className="link-control">All Category</Link>
                                                <ul className="list-cate">
                                                    <li className="level-0">All Category</li>
                                                    <li className="level-1">-Electronics</li>
                                                    <li className="level-2">Batteries & Chargens</li>
                                                    <li className="level-2">Headphone & Headsets</li>
                                                    <li className="level-2">Mp3 Player & Acessories</li>
                                                    <li className="level-1">-Smartphone & Table</li>
                                                    <li className="level-2">Batteries & Chargens</li>
                                                    <li className="level-2">Mp3 Player & Headphones</li>
                                                    <li className="level-2">Table & Accessories</li>
                                                    <li className="level-1">-Electronics</li>
                                                    <li className="level-2">Batteries & Chargens</li>
                                                    <li className="level-2">Headphone & Headsets</li>
                                                    <li className="level-2">Mp3 Player & Acessories</li>
                                                    <li className="level-1">-Smartphone & Table</li>
                                                    <li className="level-2">Batteries & Chargens</li>
                                                    <li className="level-2">Mp3 Player & Headphones</li>
                                                    <li className="level-2">Table & Accessories</li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
        
                                <div className="wrap-icon right-section" >
                                    <div className="wrap-icon-section wishlist">
                                        <Link to="#" className="link-direction">
                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                            <div className="left-info">
                                                <span className="index">0 item</span>
                                                <span className="title">Wishlist</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="wrap-icon-section minicart">
                                        <Link to="#" className="link-direction">
                                            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                            <div className="left-info">
                                                <span className="index">4 items</span>
                                                <span className="title">CART</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="wrap-icon-section show-up-after-1024">
                                        <Link to="#" className="mobile-navigation">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
        
                            </div>
                        </div>
        
                        <div className="nav-section header-sticky">
                            {/* <div className="header-nav-section">
                                <div className="container">
                                    <ul className="nav menu-nav clone-main-menu" id="mercado_haead_menu" data-menuname="Sale Info" >
                                        <li className="menu-item"><Link to="#" className="link-term">Weekly Featured</Link><span className="nav-label hot-label">hot</span></li>
                                        <li className="menu-item"><Link to="#" className="link-term">Hot Sale items</Link><span className="nav-label hot-label">hot</span></li>
                                        <li className="menu-item"><Link to="#" className="link-term">Top new items</Link><span className="nav-label hot-label">hot</span></li>
                                        <li className="menu-item"><Link to="#" className="link-term">Top Selling</Link><span className="nav-label hot-label">hot</span></li>
                                        <li className="menu-item"><Link to="#" className="link-term">Top rated items</Link><span className="nav-label hot-label">hot</span></li>
                                    </ul>
                                </div>
                            </div> */}
        
                            <div className="primary-nav-section" style={{width: "1350px"}}>
                                <div className="container" style={{height: "42px"}}>
                                    <ul className="nav primary clone-main-menu" style={{lineHeight: "42px", textDecorationLine : "none"}} id="mercado_main" data-menuname="Main menu">
                                        <li className="menu-item home-icon">
                                            <Link to="/" className="link-term mercado-item-title"><i className="fa fa-home" aria-hidden="true"></i></Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/about" className="link-term mercado-item-title">About Us</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/shop" className="link-term mercado-item-title">Shop</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/cart" className="link-term mercado-item-title">Cart</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/checkout" className="link-term mercado-item-title">Checkout</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/contact" className="link-term mercado-item-title">Contact Us</Link>
                                        </li>	
                                        
                                        {/* <li className={styled} ><Link  className="link-term mercado-item-title"><i className='fa fa-user-o'></i></Link></li> */}
                                        <li className="menu-item float-right">{AuthButton}</li>                                        															
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>

    )
}

export default Header;
