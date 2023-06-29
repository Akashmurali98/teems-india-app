import React, { useEffect } from "react";
import { Component } from "react";
import { useForm } from "react-hook-form";
import "../../assets/Css/CreateDept.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createdept } from "../../store/Department/action";

const CreateDept = () => {
  const selectedId = useParams();
  const id = selectedId.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const token = sessionStorage.getItem("token");
    dispatch(createdept(data));
  };

  return (
    <>
      <h2>Create Department</h2>
      <form className="createDeptForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Department Name</label>
        <input
          type="text"
          {...register("department", {
            pattern: /^[A-Za-z]+$/i,
            required: true,
          })}
        ></input>
        {errors.roles && <span>Enter the letters only</span>}
        <button className="createDept-btn" type="submit">
          Create Department
        </button>
      </form>
    </>
  );
};

export default CreateDept;
