import { Link } from "react-router-dom";

import React from "react";
import { setLoader } from "../store/main/reducers";
import { selectUserDetails } from "../store/Login/Reducers";

import "../assets/Css/Header.css";

const Header = () => {
  const handletoken = () => {
    sessionStorage.removeItem("token");
    dispatch(setLoader);
  };
  let token = sessionStorage.getItem("token");
  let userName = sessionStorage.getItem("userDetails");

  return (
    <div className="Header">
      <span className="head-text-left"> Teems India</span>
      <span className="accountName">
        {" "}
        &#10069; This is a {userName} account
      </span>

      <Link to="/" onClick={() => handletoken()}>
        <span className="head-text-right"> Logout(user)</span>
      </Link>
      <Link to="/departmentList">
        <span className="head-text-right"> Department</span>
      </Link>
      <Link to="/rolelist">
        <span className="head-text-right">Roles </span>
      </Link>
      <Link to="/userlist  ">
        <span className="head-text-right">Users </span>
      </Link>
      <Link to="/workflow/create">
        <span className="head-text-right">Dynamic Layout </span>
      </Link>
      <Link to="/workFlow">
        <span className="head-text-right">Dynamic List </span>
      </Link>
    </div>
  );
};

export default Header;
