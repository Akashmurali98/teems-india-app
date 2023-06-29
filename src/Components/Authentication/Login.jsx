import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import "../../assets/Css/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(
        "/dev/api/auth/login",
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            Accept: "*/*",
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
          const token = response.data.data.token;
          sessionStorage.setItem("token", token);
          navigate("/myapplication");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      {/* <Headers /> */}
      <div className="form-container">
        <h1>Login</h1>
        <h5>Please fill out the following fields to login:</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username </label>
          <input
            type="text"
            {...register("username", { required: true })}
          ></input>
          <br />
          {errors.username && <span>This field is required</span>}

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

const checkUserAuthentication = () => {
  const token = sessionStorage.getItem("token");
  return !!token;
};

export default Login;
