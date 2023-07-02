import { Link } from "react-router-dom";

import React from "react";
import "../assets/Css/Header.css";

const Header = () => {
  const handletoken = () => {
    sessionStorage.removeItem("token")
  };
  return (
    <div className="Header">
      
        <span className="head-text-left"> My Application</span>
      
        <Link to="/" onClick={() => handletoken()}>
          <span className="head-text-right"> Logout(user)</span>
        </Link>
      <span className="head-text-right">Contact</span>
      <Link to="/departmentList">
        <span className="head-text-right"> Department</span>
      </Link>
      <Link to="/rolelist">
        <span className="head-text-right">Roles </span>
      </Link>
      <Link to="/userList  ">
        <span className="head-text-right">Users </span>
      </Link>
    </div>
  );
};

export default Header;
