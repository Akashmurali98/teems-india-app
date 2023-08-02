import React from "react";
import { useFormContext } from "react-hook-form";

const FieldInput = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { name, type, inputValidations, placeholder } = field;
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        {...register(name, inputValidations)}
      ></input>
      {errors?.[name] && <span>{errors?.[name].message}</span>}
    </>
  );
};

export default FieldInput;
