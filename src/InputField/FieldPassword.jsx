import React from "react";
import { useFormContext } from "react-hook-form";

const FieldPassword = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { placeholder, type, name, inputValidations } = field;
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        {...register(name, inputValidations)}
      />
      {errors?.[name] && <span>{errors?.[name].message}</span>}
    </>
  );
};

export default FieldPassword;
