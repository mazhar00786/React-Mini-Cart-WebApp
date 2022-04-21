import React from "react";
// import { Link } from "react-router-dom";

const SeoTag = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card card-body border ">
          <div className="card-body">
          <form className="form-horizontal py-4">
             <div className="form-group row">
                <label htmlFor="inputMetaTitle" className="col-sm-2 col-form-label">Meta Title</label>
                <div className="col-sm-10">
                  <input type="text" name="meta_title"  className="form-control" id="inputMetaTitle" placeholder="Insert Meta Title"/>
                </div>
              </div>             
              <div className="form-group row">
                <label htmlFor="inputMetaKeyword" className="col-sm-2 col-form-label">
                  Meta Keyword
                </label>
                <div className="col-sm-10">
                  <textarea name="meta_keyword" className="form-control" id="inputMetaKeyword" placeholder="MetaKeyword"></textarea>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputMetaDescription" className="col-sm-2 col-form-label">
                  Meta Description
                </label>
                <div className="col-sm-10">
                  <textarea name="meta_description" className="form-control" id="inputMetaDescription" placeholder="MetaDescription"></textarea>
                </div>
              </div>
              {/* <hr/> */}
              <div className="form-group row py-3">
                <div className="offset-sm-6 col-sm-12">
                  <button type="submit" className="btn btn-outline-primary px-4 float-center">
                    Submit
                  </button>
                </div>
              </div>
            </form>     
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoTag;
