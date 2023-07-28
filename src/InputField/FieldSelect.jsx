import React from "react";
import { useFormContext } from "react-hook-form";

const FieldSelect = ({ field }) => {
  const { name, inputValidations, data, option} = field;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <select {...register(name, inputValidations)} required>
      <option> {option}</option>

      {data?.map((item, index) => (
        <option key={index} value={[item.id]}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default FieldSelect;
