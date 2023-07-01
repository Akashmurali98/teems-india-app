import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";
import "../../assets/Css/Login.css";
import { authentication } from "../../store/Login/actions";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm("onTouched");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(authentication(data))
      .then((isTokenAvailable) => {
        if (isTokenAvailable) {
          navigate("/myapplication");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="form-container">
        <h1>Login</h1>
        <h5>Please fill out the following fields to login:</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username </label>
          <input
            type="text"
            {...register("username", {
              required: "Enter the name",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Alphabets only required",
              },
            })}
          ></input>
          <br />
          {errors.username && <span>{errors.username?.message}</span>}

          <br />
          <label>Password </label>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
          ></input>
          <br />
          {errors.password && <span>This field is required</span>}
          <br />
          <label>
            <input type="checkbox" {...register("rememberMe")} />
            Remember Me
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
