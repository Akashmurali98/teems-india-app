import React from "react";
import { useFormContext } from "react-hook-form";

const FieldInputRole = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { labelName, type, name, inputValidations } = field;
  return (
    <>
      <label>{labelName}</label>
      <input
        type={type}
        name={name}
        {...register(name, inputValidations)}
      ></input>
      {errors?.[name] && <span>{errors?.[name]?.message} </span>}
    </>
  );
};

export default FieldInputRole;
