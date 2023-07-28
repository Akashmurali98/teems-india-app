import React from "react";
import { useNavigate } from "react-router-dom";
// import "../../assets/Css/CreateUser.css";

const Button = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="backwardUser" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};

export default Button;
