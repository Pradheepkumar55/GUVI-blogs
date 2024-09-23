import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home container d-flex flex-column justify-content-center align-items-center">
        
          <h1 className="display-3 mb-4">GUVI Blog</h1>
          
        <h1 className="lead fs-3">
          ZEN CLASS
        </h1>
        <p className="lead fs-4">
        ZEN CLASS is one of the industry's leading Project Based Career Programs offered by GUVI that promises Placement Guidance on completing the course.
        </p>
        <Link
          to="blogs/all"
          className="btn btn-outline-success btn-lg d-flex align-items-baseline"
        >
          Explore <i class="fas fa-arrow-right ms-2"></i>
        </Link>
      </div>
    </>
  );
};

export default Home;
