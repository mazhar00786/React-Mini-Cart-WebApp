import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewCategory = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let isMounted = true;
    // axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.get(`/api/getCategory`).then(res => {
      if (isMounted) {
        if (res.data.status === 200) {
          setCategory(res.data.category);
          //  console.log(res.data.category);
          setLoading(false);  
        }        
      }         
    }).catch((error) => {
      console.log(error.res)
    });
        
    return () => {
      isMounted = false
    }
    // });
  });
  
  var categoryList = "";
  if (loading) {
    return <h4>Loading...</h4>
  } else {
    
    categoryList = category.map((item, idx) => {
       return (
          <div className="col-md-4 mt-4" key={idx}>
            <div className="card">
              <div className='card-body'>
                <Link to={`collections/${item.slug}`} className="text display none">
                  <h5>{item.name}</h5>
                </Link>
              </div>
            </div>
          </div>
       )
    });
  }

  return (
      <div>

        <div className="py-3 bg-warning">
          <div className="container">
            <h6>Category Page</h6>
          </div>
        </div>

        <div className="pg-3">
          <div className="container">
            <div className="row">
              {categoryList}
            </div>    
          </div>
        </div>

      </div>
  )
}

export default  ViewCategory;
