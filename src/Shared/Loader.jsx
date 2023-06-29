import React from "react";
import loader from "../assets/Images/cms-loader.gif";
import "../assets/Css/Loader.css";

const Loader = () => {
  return (
    <div className="load-cont">
      <div className="load-inner-cont">
      <img src={loader} className="loader"></img>
      </div>
    </div>
  );
};

export default Loader;
