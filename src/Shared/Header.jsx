import React from "react";
import "../assets/Css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const handletoken = () => {
    const token = sessionStorage.removeItem("token");
  };
  return (
    <div className="Header">
      <Link to="/myapplication">
        <span className="head-text-left"> My Aplication</span>
      </Link>
      <button onClick={() => handletoken()}>
        <Link to="/">
          <span className="head-text-right"> Logout(user)</span>
        </Link>
      </button>
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
