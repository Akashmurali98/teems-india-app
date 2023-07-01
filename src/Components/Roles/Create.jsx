import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/Css/Create.css";
import React from "react";
import { createRole } from "../../store/Role/actions";
import RolesApi from "../../Service/Roles";

const CreateRole = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.role.roleData);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm("onTouched");

  const onSubmit = (data) => {
    dispatch(createRole(data));
    dispatch(Loader());
    const obj = new RolesApi();
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
              value: /^[A-Za-z]+$/,
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
