import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="card mx-5  ">
      <div className="card-body ">
        <h5 className="card-title">Thank You!</h5>
        <p className="card-text">Your messages is send successfully.</p>
        <p className="card-text">This simple website developed by Anshu!</p>

        <Link to="/" className="btn btn-primary w-50">
          Create your link
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
