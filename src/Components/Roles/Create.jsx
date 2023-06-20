import React from "react";
import { Component } from "react";
import Header from "../Header";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

import "../../Component css/Create.css";

const CreateRole = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const token = sessionStorage.getItem("token");
    axios
      .post(
        `/dev/api/role`,
        {
          name: data.roles,
        },
        {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
          navigate("/rolesList");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <h2>Create Roles</h2>
      <form className="createRole" onSubmit={handleSubmit(onSubmit)}>
        <label>Roles</label>
        <input
          type="text"
          name="roles"
          {...register("roles", { pattern: /^[A-Za-z]+$/i, required: true })}
        ></input>
        {errors.roles && <span>Enter the letters only</span>}

        <br />
        <label>Employe Id</label>
        <input
          type="text"
          name="employeId"
          {...register("employeId", { pattern: /^[0-9]+$/i, required: true })}
        ></input>
        {errors.employeId && <span>Enter the numbers only</span>}
        <br />
        {/* <input type="submit">Create</input> */}
        <button className="createButton" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default CreateRole;
