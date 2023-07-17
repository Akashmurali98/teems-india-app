import React from "react";
import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";
import { selectFormData } from "../store/Role/Reducers";
import { selectFormData as selectDeptData } from "../store/Department/Reducers";

const FieldSelect = ({ field }) => {
  const { name, inputValidations, option, role, dept } = field;
  const currentData = name === "departments" ? dept : role;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <select {...register(name, inputValidations)} required>
      <option> {option}</option>

      {currentData?.map((item, index) => (
        <option key={index} value={[item.id]}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default FieldSelect;
