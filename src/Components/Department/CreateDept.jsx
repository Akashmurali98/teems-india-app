import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import React from "react";

import "../../assets/Css/CreateDept.css";
import { createdept as createDept } from "../../store/Department/action";

const CreateDept = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createDept(data));
  };

  return (
    <>
      <h2>Create Department</h2>
      <form className="createDeptForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Department Name</label>
        <input
          type="text"
          {...register("department", {
            required: "Enter the name",
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: "Alphabets only required",
            },
          })}
        ></input>
        {errors.roles && <span>{errors.roles?.message}</span>}
        <button className="createDept-btn" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default CreateDept;
