import React from "react";
import Notfound from "../assets/Images/notfound.png";

import "../assets/Css/PageNotFound.css";

const PageNotFound = () => {
  return (
    <>
      <div className="pageNotFound">
        <img src={Notfound}></img>
      </div>
    </>
  );
};

export default PageNotFound;
