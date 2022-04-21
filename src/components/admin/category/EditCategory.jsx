import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// import "../../../css-js/DataTableCss";

const chkbx = { 
  size: "18px",
  padding: "5px",
}

// const styled = { color: "red" };

const EditCategory = (props) => {

  const history = useHistory();

  const [loading, setLoading] = useState(true);

  const [form, setCategory] = useState([]);

  const [error, setError] = useState([]);

  
  useEffect(() => {
    const category_id = props.match.params.id

    axios.get(`/api/edit-category/${category_id}`).then(res => {

       if (res.data.status === 200) {

         setCategory(res.data.category)

       } else {
         swal("Error", "Category not found", 'error');
         history.push('/admin/categories');     
       }
       setLoading(false)
    })
  }, [props.match.params.id, history])

  const handleInput = (e) => {
    e.persist();
    setCategory({ ...form, [e.target.name]: e.target.value });
  }; 

  const updateCategory = (e) => {
      e.preventDefault();
      const category_id = props.match.params.id;
      const data = form;
      axios.put(`/api/update-category/${category_id}`, data).then(res => {
        if(res.data.status === 200) {

          swal("Success", res.data.message, 'success')
          history.push('/admin/categories')
          setError([])

        } else if (res.data.status === 422) {

          setError(res.data.errors)
        } else {
          
          swal("Error", res.data.message, 'error')
          history.push('/admin/categories')
        }
      });
  }

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
    <div className="container-fliud px-4">
      <div className="content">
        <div className="card">
          <div className="card-header"><i className="far fa-edit"> </i> Edit Category Form
          <Link to="/admin/categories" className="btn btn-outline-primary btn-sm float-end"><i className="fa fa-arrow-left"> </i> Back</Link>
          </div>

        {/* <div className="card-body"> */}
          <div className="row">
            {/* <div className="col-lg-8 col-sm-8 col-md-6 col-xs-12 col-md-offset-3"> */}
            <div className="col-md-12">
              <div className=" main-content-area">
            
                    <form onSubmit={updateCategory} id='CATEGORY_FORM'>
                      <div className="row">
                        <div className="col-md-2 col-md-offset-3"></div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <div className="wrap-title mb-4">
                              <h4 className="form-title">Category Details</h4>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="inputSlug"
                                className="col-sm-3 col-form-label"
                              >
                                Slug
                              </label>
                              <div className="col-sm-9">
                                <input type="text" name="slug" onChange={handleInput} value={form.slug} className="form-control" id="inputSlug" placeholder="Slug"/>
                                <span className="text-danger">{error.slug}</span>  
                              </div>
                            </div>
                            <div className="form-group row">
                              <label htmlFor="inputName" className="col-sm-3 col-form-label">
                                Name
                              </label>
                              <div className="col-sm-9">
                                <input type="text" name="name" onChange={handleInput} value={form.name} className="form-control" id="inputName" placeholder="Name"/>
                                <span className="text-danger">{error.name}</span> 
                              </div>
                            </div>
                            <div className="form-group row">
                              <label htmlFor="inputExperience" className="col-sm-3 col-form-label">Description</label>
                              <div className="col-sm-9">
                                <textarea className="form-control" onChange={handleInput}
                                  value={form.description} name="description" id="inputExperience" placeholder="Description"></textarea>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label htmlFor="inputStatus" className="col-sm-3 col-form-label">Status</label>
                              <div className="col-sm-9">
                                <div className="checkbox">
                                  <input type="checkbox" name="status" onChange={handleInput} value={form.status} className={chkbx} />
                                  <label className="ms-4"> Status 1 = Shown / 0 = Hidden</label>
                                </div>
                              </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-2"></div>
                      </div>
                      {/* ================================================ */}
                      <div className="row">
                        
                        <div className="col-md-2 col-md-offset-3"></div>

                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="wrap-title">
                              <h4 className="form-title mb-4">SEO Tags Details</h4>
                            </div>

                            <div className="form-group row">
                              <label htmlFor="inputMetaTitle"className="col-sm-3 col-form-label">
                                Meta Title
                              </label>
                              <div className="col-sm-9">
                                <input type="text" name="meta_title" onChange={handleInput} value={form.meta_title} className="form-control" id="inputMetaTitle" placeholder="Meta Title"/>
                                <span className="text-danger">{error.meta_title}</span> 
                              </div>
                            </div>
                            <div className="form-group row">
                              <label htmlFor="inputMetaKeyword"className="col-sm-3 col-form-label">
                                Meta Keyword
                              </label>
                              <div className="col-sm-9">
                                <textarea name="meta_keyword" onChange={handleInput} value={form.meta_keyword} className="form-control" id="inputMetaKeyword" placeholder="Meta Keyword"></textarea>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label htmlFor="inputMetaDescription" className="col-sm-3 col-form-label">
                                Meta Description
                              </label>
                              <div className="col-sm-9">
                                <textarea name="meta_description" onChange={handleInput} value={form.meta_description} className="form-control" id="inputMetaDescription" placeholder="Meta Description"></textarea>
                              </div>
                            </div>
                            
                            <center><button type="submit" className="btn btn-outline-primary btn-lg mt-4 justify-center">Update</button></center>
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
      </div>
    </div>
  );
}

export default EditCategory;
