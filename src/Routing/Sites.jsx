import React from "react";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";
const Sites = () => {
  return (
    <div>
      {/* <h2>This is one of the best ecommerce sites</h2> */}

      <Link to="/product">Product</Link>
      <br />
      <Link to="/welcome">Welcome</Link>
    </div>
  );
};

export default Sites;
