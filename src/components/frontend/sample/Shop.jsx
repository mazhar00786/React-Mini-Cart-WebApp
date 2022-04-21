import React from 'react';
import { Link } from "react-router-dom";

import '../../assets/frontend/css/product.css';
import ViewCategory from './collections/ViewCategory';

const Shop = () => {
    return (
      <div className="home-page home-01">
        <main id="main">

            <div className="container">

              <div className="wrap-breadcrumb">
                <ul>
                  <li className="item-link"><Link to="#" className="link">home</Link></li>
                  <li className="item-link"><span>Digital & Electronics</span></li>
                </ul>
              </div>
              <div className="row">

              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar"><ViewCategory/></div>

                <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">

                  <div className="banner-shop">
                    <Link to="#" className="banner-link">
                      <figure><img src={require("../../assets/frontend/images/shop-banner.jpg")} alt=""/></figure>
                    </Link>
                  </div>

                  <div className="wrap-shop-control">
                    <div className='row' style={{lineHight: "40px"}}>
                      <div className=' col-md-4 col-sm-4'><h1 className="shop-title">Digital & Electronics</h1></div>
                  
                      {/* <div className="wrap-right col-md-8 col-sm-8">

                        <div className="sort-item orderby">
                          <select name="orderby" className="use-chosen" >
                            <option value="menu_order" selected="selected">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by newness</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                          </select>
                        </div>

                        <div className="sort-item product-per-page">
                          <select name="post-per-page" className="use-chosen" >
                            <option value="12" selected="selected">12 per page</option>
                            <option value="16">16 per page</option>
                            <option value="18">18 per page</option>
                            <option value="21">21 per page</option>
                            <option value="24">24 per page</option>
                            <option value="30">30 per page</option>
                            <option value="32">32 per page</option>
                          </select>
                        </div>

                        <div className="change-display-mode">
                          <Link to="#" className="grid-mode display-mode active"><i className="fa fa-th"></i>Grid</Link>
                           <Link to="#" className="list-mode display-mode"><i className="fa fa-th-list"></i>List</Link> 
                        </div>

                      </div> */}

                    </div>

                  </div>
                  {/* <!--end wrap shop control--> */}

                  <div className="row product-list grid-products equal-container">

                        <div className="container">
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 px-4">
                              <div className="product product-style-3 equal-elem ">
                                <div className="product-thumnail">
                                  <Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                    <figure><img src={require("../../assets/frontend/images/products/digital_20.jpg")} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
                                  <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                  <Link to="#" className="btn add-to-cart">Add To Cart</Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6  px-4">
                              <div className="product product-style-3 equal-elem ">
                                <div className="product-thumnail">
                                  <Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                    <figure><img src={require("../../assets/frontend/images/products/digital_22.jpg")} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
                                  <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                  <Link to="#" className="btn add-to-cart">Add To Cart</Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6  px-4">
                              <div className="product product-style-3 equal-elem ">
                                <div className="product-thumnail">
                                  <Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                    <figure><img src={require("../../assets/frontend/images/products/digital_10.jpg")} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
                                  <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                  <Link to="#" className="btn add-to-cart">Add To Cart</Link>
                                </div>
                              </div>
                            </div>                         
                          </div>
                        </div>  
                        

                        <div className="container">
                          <div classNname="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 px-4">
                              <div className="product product-style-3 equal-elem ">
                                  <div className="product-thumnail">
                                    <Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                      <figure><img src={require("../../assets/frontend/images/products/digital_01.jpg")} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                                    </Link>
                                  </div>
                                  <div className="product-info">
                                    <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
                                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                    <Link to="#" className="btn add-to-cart">Add To Cart</Link>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 px-4">
                              <div className="product product-style-3 equal-elem ">
                                <div className="product-thumnail">
                                  <Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                    <figure><img src={require("../../assets/frontend/images/products/digital_21.jpg")} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
                                  <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                  <Link to="#" className="btn add-to-cart">Add To Cart</Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 px-4">
                              <div className="product product-style-3 equal-elem ">
                                <div className="product-thumnail">
                                  <Link to="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                    <figure><img src={require("../../assets/frontend/images/products/digital_15.jpg")} alt="T-Shirt Raw Hem Organic Boro Constrast Denim"/></figure>
                                  </Link>
                                </div>
                                <div className="product-info">
                                  <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></Link>
                                  <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                  <Link to="#" className="btn add-to-cart">Add To Cart</Link>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="container product-list grid-products equal-container">
                          <div class="row">
                            <div class="col">
                              Column
                            </div>
                            <div class="col">
                              Column
                            </div>
                            <div class="col">
                              Column
                            </div>
                          </div>
                        </div>

                        <div className="container product-list grid-products equal-container">
                          <div class="row">
                            <div class="col">
                              Column
                            </div>
                            <div class="col">
                              Column
                            </div>
                            <div class="col">
                              Column
                            </div>
                          </div>

                        </div>                        

                  </div>

                  <div className="wrap-pagination-info">
                    <ul className="page-numbers">
                      <li><span className="page-number-item current" >1</span></li>
                      <li><Link className="page-number-item" to="#" >2</Link></li>
                      <li><Link className="page-number-item" to="#" >3</Link></li>
                      <li><Link className="page-number-item next-link" to="#" >Next</Link></li>
                    </ul>
                    <p className="result-count">Showing 1-8 of 12 result</p>
                  </div>
                </div>
                {/* <!--end main products area--> */}


                {/* <!--end sitebar--> */}

              </div>
              {/* <!--end row--> */}

            </div>
            {/* <!--end container--> */}

        </main>        
      </div>
    )
}

export default Shop;
