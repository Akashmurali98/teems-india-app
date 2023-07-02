import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import React from "react";

import "../../assets/Css/Create.css";
import { createRole } from "../../store/Role/actions";

const CreateRole = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm("onTouched");

  const onSubmit = (data) => {
    dispatch(createRole(data));
  };

  return (
    <>
      <h2>Create Roles</h2>
      <form className="createRole">
        <label>Roles</label>
        <input
          type="text"
          name="roles"
          {...register("roles", {
            required: "Enter the name",
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: "Alphabets only required",
            },
          })}
        ></input>
        {errors.roles && <span>{errors.roles?.message} </span>}

        <br />
        <button
          className="createButton"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Create
        </button>
      </form>
    </>
  );
};

export default CreateRole;
