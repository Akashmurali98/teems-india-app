import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

import { authentication } from "../../store/Login/actions";

import "../../assets/Css/Login.css";

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
          navigate("/rolelist");
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
            {...register("password", {
              required: "Enter the password",
            })}
          ></input>
          <br />
          {errors.password && <span>{errors.password?.message}</span>}
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
