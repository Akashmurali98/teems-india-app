import React from "react";
import { useForm } from "react-hook-form";

const Train = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm("onTouched");
  const onSubmit = (data) => {
    console.log(data);
  };

  const checkpassword = (value) => {
    const isAlphabet = /[a-zA-Z]/.test(value);
    const isNumeric = /[0-9]/.test(value);
    const isspecialCharac = /[!@#$%^&*]/.test(value);
    return isAlphabet && isNumeric && isspecialCharac
      ? true
      : "Password required atleast one alphabet,special character and number ";
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "Please enter the password",
            validate: checkpassword,
          })}
        ></input>
        <span>{errors?.password && errors?.password.message}</span>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Train;
