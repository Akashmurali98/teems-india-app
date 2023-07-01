import { Link } from "react-router-dom";

import React from "react";
import "../assets/Css/Header.css";

const Header = () => {
  const handletoken = () => {
  };
  return (
    <div className="Header">
      <Link to="/myapplication">
        <span className="head-text-left"> My Aplication</span>
      </Link>
        <Link to="/" onClick={() => handletoken()}>
          <span className="head-text-right"> Logout(user)</span>
        </Link>
      <span className="head-text-right">Contact</span>
      <Link to="/departmentList">
        <span className="head-text-right"> Department</span>
      </Link>
      <Link to="/rolesList">
        <span className="head-text-right">Roles </span>
      </Link>
      <Link to="/usersList  ">
        <span className="head-text-right">Users </span>
      </Link>
    </div>
  );
};

export default Header;
