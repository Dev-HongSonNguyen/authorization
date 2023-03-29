import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to={`signup`} className="btn btn-dark">
        Sign up
      </Link>
      <Link to={`signin`} className="btn btn-dark">
        Sign in
      </Link>
    </div>
  );
};

export default HomePage;
