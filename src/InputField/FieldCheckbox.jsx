import React from "react";
import {useFormContext } from "react-hook-form";

const FieldCheckbox = ({ field }) => {

  const { register } = useFormContext();

  const { name, type, label } = field;

  return (
    <span className={type}>
      {label}
      <input type={type} name={name} {...register(name)} />
    </span>
  );
};

export default FieldCheckbox;
