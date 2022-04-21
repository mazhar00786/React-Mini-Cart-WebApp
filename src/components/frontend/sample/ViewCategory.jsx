// import React, {setState, useEffect} from 'react';
import { Link } from "react-router-dom";

// import axios from 'axios';
// import '../../..'

const ViewCategory = () => {
    // const [loading, setLoading] = setState(true);
    // const [category, setCategory] = setState([])
    // useEffect(() => {
    //     axios.get(`/api/getCategory`).then(res => {
            
    //         if (res.data.status === 200) {
    //             // setCategory(res.data.category)
    //         }
    //         setLoading(false)
    //     });s
    // }, []);
    
    // if (loading) {
        
    // } else {
        // var categoryList = '';
        // categoryList =
        // category.map((item) => {
        //     return (
        //         <div></div>
        //     )
        // });
    // }

    return (
      <div>
        <div className="widget mercado-widget categories-widget">
          <h2 className="widget-title">All Categories</h2>
          <div className="widget-content">
            <ul className="list-category">
              <li className="category-item has-child-cate">
                <Link to="#" className="cate-link">Fashion & Accessories</Link>
                <span className="toggle-control">+</span>
                <ul className="sub-cate">
                  <li className="category-item"><Link to="#" className="cate-link">Batteries (22)</Link></li>
                  <li className="category-item"><Link to="#" className="cate-link">Headsets (16)</Link></li>
                  <li className="category-item"><Link to="#" className="cate-link">Screen (28)</Link></li>
                </ul>
              </li>
              <li className="category-item has-child-cate">
                <Link to="#" className="cate-link">Furnitures & Home Decors</Link>
                <span className="toggle-control">+</span>
                <ul className="sub-cate">
                  <li className="category-item"><Link to="#" className="cate-link">Batteries (22)</Link></li>
                  <li className="category-item"><Link to="#" className="cate-link">Headsets (16)</Link></li>
                  <li className="category-item"><Link to="#" className="cate-link">Screen (28)</Link></li>
                </ul>
              </li>
              <li className="category-item has-child-cate">
                <Link to="#" className="cate-link">Digital & Electronics</Link>
                <span className="toggle-control">+</span>
                <ul className="sub-cate">
                  <li className="category-item"><Link to="#" className="cate-link">Batteries (22)</Link></li>
                  <li className="category-item"><Link to="#" className="cate-link">Headsets (16)</Link></li>
                  <li className="category-item"><Link to="#" className="cate-link">Screen (28)</Link></li>
                </ul>
              </li>
              <li className="category-item">
                <Link to="#" className="cate-link">Tools & Equipments</Link>
              </li>
              <li className="category-item">
                <Link to="#" className="cate-link">Kid’s Toys</Link>
              </li>
              <li className="category-item">
                <Link to="#" className="cate-link">Organics & Spa</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Categories widget--> */}

        <div className="widget mercado-widget filter-widget brand-widget">
          <h2 className="widget-title">Brand</h2>
          <div className="widget-content">
            <ul className="list-style vertical-list list-limited" data-show="6">
              <li className="list-item"><Link className="filter-link active" to="#">Fashion Clothings</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Laptop Batteries</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Printer & Ink</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">CPUs & Prosecsors</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Sound & Speaker</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Shop Smartphone & Tablets</Link></li>
              <li className="list-item default-hiden"><Link className="filter-link " to="#">Printer & Ink</Link></li>
              <li className="list-item default-hiden"><Link className="filter-link " to="#">CPUs & Prosecsors</Link></li>
              <li className="list-item default-hiden"><Link className="filter-link " to="#">Sound & Speaker</Link></li>
              <li className="list-item default-hiden"><Link className="filter-link " to="#">Shop Smartphone & Tablets</Link></li>
              <li className="list-item"><Link data-label='Show less<i className="fa fa-angle-up" aria-hidden="true"></i>' className="btn-control control-show-more" to="#">Show more<i className="fa fa-angle-down" aria-hidden="true"></i></Link></li>
            </ul>
          </div>
        </div>
        {/* <!-- brand widget--> */}

        <div className="widget mercado-widget filter-widget price-filter">
          <h2 className="widget-title">Price</h2>
          <div className="widget-content">
            <div id="slider-range"></div>
            <p>
              <label for="amount">Price:</label>
              <input type="text" id="amount" readonly/>
              <button className="filter-submit">Filter</button>
            </p>
          </div>
        </div>
        {/* <!-- Price--> */}

        <div className="widget mercado-widget filter-widget">
          <h2 className="widget-title">Color</h2>
          <div className="widget-content">
            <ul className="list-style vertical-list has-count-index">
              <li className="list-item"><Link className="filter-link " to="#">Red <span>(217)</span></Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Yellow <span>(179)</span></Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Black <span>(79)</span></Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Blue <span>(283)</span></Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Grey <span>(116)</span></Link></li>
              <li className="list-item"><Link className="filter-link " to="#">Pink <span>(29)</span></Link></li>
            </ul>
          </div>
        </div>
        {/* <!-- Color --> */}

        <div className="widget mercado-widget filter-widget">
          <h2 className="widget-title">Size</h2>
          <div className="widget-content">
            <ul className="list-style inline-round ">
              <li className="list-item"><Link className="filter-link active" to="#">s</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">M</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">l</Link></li>
              <li className="list-item"><Link className="filter-link " to="#">xl</Link></li>
            </ul>
            <div className="widget-banner">
              <figure><img src={require("../../../assets/frontend/images/size-banner-widget.jpg")} width="270" height="331" alt=""/></figure>
            </div>
          </div>
        </div>
        {/* <!-- Size --> */}

        <div className="widget mercado-widget widget-product">
          <h2 className="widget-title">Popular Products</h2>
          <div className="widget-content">
            <ul className="products">
              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                      <figure><img src={require("../../../assets/frontend/images/products/digital_01.jpg")} alt=""/></figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                      <figure><img src={require("../../../assets/frontend/images/products/digital_17.jpg")} alt=""/></figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                      <figure><img src={require("../../../assets/frontend/images/products/digital_18.jpg")} alt=""/></figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                  </div>
                </div>
              </li>

              <li className="product-item">
                <div className="product product-widget-style">
                  <div className="thumbnnail">
                    <Link to="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                      <figure><img src={require("../../../assets/frontend/images/products/digital_20.jpg")} alt=""/></figure>
                    </Link>
                  </div>
                  <div className="product-info">
                    <Link to="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></Link>
                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
        {/* <!-- brand widget--> */}

      </div>
    )
}

export default ViewCategory;
