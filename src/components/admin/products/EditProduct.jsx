import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// const chkbx = {
//   size: "18px",
//   padding: "5px",
// }
import axios from "axios";
import swal from "sweetalert";

const EditProduct = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [isCheck, setCheckbox] = useState([]);
  const [picture, setPicture] = useState([]);
  const [error, setError] = useState([]);

  const [form, setProduct] = useState({
    slug: "",
    name: "",
    category_id: "",
    description: "",

    meta_title: "",
    meta_keyword: "",
    meta_desc: "",

    brand: "",
    selling_price: "",
    original_price: "",
    quantity: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    // setProduct({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    e.persist();
    setPicture({ image: e.target.files[0] });
  };

  const handleCheckbox = (e) => {
     e.persist();
     setCheckbox({...isCheck, [e.target.name]: e.target.checked })
  }

  useEffect(() => {
    axios.get(`/api/all-category`).then((res) => {
      if (res.data.status === 200) {
        setCategory(res.data.category);
      }
    });

    //fetch product
    const product_id = props.match.params.id;
    axios.get(`/api/edit-product/${product_id}`).then(res => {
       if (res.data.status === 200) {
         setProduct(res.data.product);
         setCheckbox(res.data.product);
       } else {
          swal("Error!", res.data.message, 'warning');
          history.push('/admin/product');
       }
       setLoading(false);
    });
  }, [props.match.params.id, history]);
  // formData.append('', form);

  const updateProduct = (e) => {
    e.preventDefault();

    const product_id = props.match.params.id;

    const formData = new FormData();
    formData.append("image", picture.image);

    formData.append("slug", form.slug);
    formData.append("name", form.name);
    formData.append("category_id", form.category_id);
    formData.append("description", form.description);

    formData.append("meta_title", form.meta_title);
    formData.append("meta_keyword", form.meta_keyword);
    formData.append("meta_desc", form.meta_desc);

    formData.append("brand", form.brand);
    formData.append("selling_price", form.selling_price);
    formData.append("original_price", form.original_price);
    formData.append("quantity", form.quantity);
    formData.append("featured", isCheck.featured ? '1' : '0');
    formData.append("popular", isCheck.popular ? '1' : '0');
    formData.append("status", isCheck.status ? '1' : '0');

    axios.post(`/api/update-product/${product_id}`, formData).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        setError([]);
        history.push("/admin/products");
      } else if (res.data.status === 422) {
        setTimeout(() => setError(res.data.errors), 1000);
      } else {
        swal("Error", res.data.message, "error");
        history.push("/admin/products");
      }
    });
  };

  if (loading) {
    return (
      <div style={{marginTop: "100px"}}>
        <center>
          <img src={require(`../../../assets/spiner.gif`)} width="250" height="250" alt="loading"/>
        </center>
      </div>
      
    )
  }

  return (
    <div className="card">
      <div className="card-header">Edit Product Form
      <Link to="/admin/products" className="btn btn-outline-primary btn-sm float-end">All Product</Link>
      </div>
      {/* <div className="card-body"> */}
      <div className="row">
        {/* <div className="col-lg-8 col-sm-8 col-md-6 col-xs-12 col-md-offset-3"> */}
        <div className="col-md-12">
          <div className=" main-content-area">
            <form
              onSubmit={updateProduct}
              id="PRODUCT_FORM"
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-2 col-md-offset-3"></div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="wrap-title mb-4">
                      <h4 className="form-title">Product Details</h4>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputSlug"
                        className="col-sm-3 col-form-label"
                      >
                        Slug
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="slug"
                          onChange={handleInput}
                          value={form.slug}
                          className="form-control"
                          id="inputSlug"
                          placeholder="Slug"
                        />
                        <span className="text-danger">{error.slug}</span>
                      </div>
                    </div>
                    {/* Name Field */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-3 col-form-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="name"
                          onChange={handleInput}
                          value={form.name}
                          className="form-control"
                          id="inputName"
                          placeholder="Name"
                        />
                        <span className="text-danger">{error.name}</span>
                      </div>
                    </div>
                    {/* Category Field */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputCategory"
                        className="col-sm-3 col-form-label"
                      >
                        Select Category
                      </label>
                      <div className="col-sm-9">
                        {/* <input type="text" name="name" onChange={handleInput} value={form.name} className="form-control" id="inputName" placeholder="Name"/> */}
                        <select
                          name="category_id"
                          onChange={handleInput}
                          value={form.category_id}
                          id="inputCategory"
                          className="form-select"
                        >
                          <option defaultValue>Select categoty</option>
                          {category.map((item) => {
                            return (
                              <option value={item.id} key={item.id}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                        <span className="text-danger">{error.category}</span>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputDesc"
                        className="col-sm-3 col-form-label"
                      >
                        Description
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          className="form-control"
                          onChange={handleInput}
                          value={form.description}
                          name="description"
                          id="inputDesc"
                          placeholder="Description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>

              {/* ===============SEO Tags Section================= */}

              <div className="row">
                <div className="col-md-2 col-md-offset-3"></div>

                <div className="col-md-8">
                  <div className="card-body">
                    <div className="wrap-title">
                      <h4 className="form-title">SEO Tags</h4>
                    </div>{" "}
                    <hr />
                    <div className="form-group row">
                      <label
                        htmlFor="inputMetaTitle"
                        className="col-sm-3 col-form-label"
                      >
                        Meta Title
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="meta_title"
                          onChange={handleInput}
                          value={form.meta_title}
                          className="form-control"
                          id="inputMetaTitle"
                          placeholder="Meta Title"
                        />
                        <span className="text-danger">{error.meta_title}</span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputMetaKeyword"
                        className="col-sm-3 col-form-label"
                      >
                        Meta Keyword
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          name="meta_keyword"
                          onChange={handleInput}
                          value={form.meta_keyword}
                          className="form-control"
                          id="inputMetaKeyword"
                          placeholder="Meta Keyword"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputMetaDescription"
                        className="col-sm-3 col-form-label"
                      >
                        Meta Description
                      </label>
                      <div className="col-sm-9">
                        <textarea
                            name="meta_desc"
                            onChange={handleInput}
                            value={form.meta_desc}
                            className="form-control"
                            id="inputMetaDescription"
                            placeholder="Meta Description"
                          ></textarea>
                      </div>
                    </div>
                    {/* <center><button type="submit" className="btn btn-outline-primary btn mt-4 justify-center">Submit</button></center> */}
                  </div>
                </div>

                <div className="col-md-2"></div>
              </div>

              {/* ===============Other Details Section================= */}

              <div className="row">
                <div className="col-md-2 col-md-offset-3"></div>

                <div className="col-md-8">
                  <div className="card-body">
                    <div className="wrap-title">
                      <h4 className="form-title">Other Details</h4> <hr />
                    </div>
                    {/* Selling Price */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputSellingPrice"
                        className="col-sm-3 col-form-label"
                      >
                        {" "}
                        Selling Price
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          name="selling_price"
                          onChange={handleInput}
                          value={form.selling_price}
                          className="form-control"
                          id="inputMetaTitle"
                          placeholder="Selling Price"
                        />
                        <span className="text-danger">
                          {error.selling_price}
                        </span>
                      </div>
                    </div>
                    {/* Original Price */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputOriginalPrice"
                        className="col-sm-3 col-form-label"
                      >
                        Original Price
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          name="original_price"
                          onChange={handleInput}
                          value={form.original_price}
                          className="form-control"
                          id="inputOriginalPrice"
                          placeholder="Original Price"
                        />
                        <span className="text-danger">
                          {error.original_price}
                        </span>
                      </div>
                    </div>
                    {/* Quantity */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputQuantity"
                        className="col-sm-3 col-form-label"
                      >
                        Quantity
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          name="quantity"
                          onChange={handleInput}
                          value={form.quantity}
                          className="form-control"
                          id="inputQuantity"
                          placeholder="Insert Quantity"
                        />
                      </div>
                    </div>
                    {/* Brand */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputBrand"
                        className="col-sm-3 col-form-label"
                      >
                       Brand
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="brand"
                          onChange={handleInput}
                          value={form.brand}
                          className="form-control"
                          id="inputBrand"
                          placeholder="Insert Brand"
                        />
                        <span className="text-danger">{error.brand}</span>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="form-group row">
                      <label htmlFor="inputImage" className="col-sm-3 col-form-label">
                       Image &nbsp;&nbsp;
                       <img src={`http://localhost:8000/${form.image}`} width="35px" height="35px" alt={form.image}/>
                      </label>
                      <div className="col-sm-9">              
                        <input type="file" name="image" onChange={handleImage} className="form-control" id="inputImage" placeholder="Image"/>                        
                        <span className="text-danger">{error.image}</span>
                      </div>
                    </div>
                    {/* Featured */}
                    <div className="form-group row">
                      <label htmlFor="inputPopular" className="col-sm-3 col-form-label">Featured </label>
                      <div className="col-sm-9">
                        <div className="form-check">
                          <input type="checkbox" name="featured" onChange={handleCheckbox} defaultChecked ={isCheck.featured  === 1 ? true : false} className="form-check-input mw-25 mh-25 p-2"/>
                          <label className="ms-4">Featured 1 = Shown / 0 = Hidden</label>
                        </div>
                      </div>
                    </div>

                    {/* Popular */}
                    <div className="form-group row">
                      <label htmlFor="inputPopular" className="col-sm-3 col-form-label">Popular</label>
                      <div className="col-sm-9">
                        <div className="form-check">
                          <input type="checkbox" name="popular" onChange={handleCheckbox} defaultChecked ={isCheck.popular  === 1 ? true : false} className="form-check-input mw-25 mh-25 p-2" />
                          <label className="ms-4">Popular 1 = Shown / 0 = Hidden</label>
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="form-group row">
                      <label htmlFor="inputStatus" className="col-sm-3 col-form-label">Status</label>
                      <div className="col-sm-9">
                        <div className="form-check">
                          <input type="checkbox" name="status" onChange={handleCheckbox} defaultChecked ={isCheck.status  === 1 ? true : false} className="form-check-input mw-25 mh-25 p-2" />
                          <label className="ms-4">Status 1 = Shown / 0 = Hidden</label>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <center>
                      <button
                        type="submit"
                        className="btn btn-outline-primary btn mt-4 justify-center"
                      >
                        Submit
                      </button>
                    </center>
                  </div>
                </div>

                <div className="col-md-2"></div>
              </div>
            </form>
          </div>
          {/* <!--end main products area-->		 */}
        </div>
      </div>
      {/* <!--end row-->          */}
      {/* </div> */}
    </div>
  );
};

export default EditProduct;
