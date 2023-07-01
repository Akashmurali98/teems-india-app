import { useForm } from "react-hook-form";

import React from "react";

const CreateUsers = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm("onTouched");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="usersForm">
        <label>Name</label>
        <input
          type="text"
          name="name"
          {...register("name", {
            pattern: /^[A-Za-z]+$/i,
            required: "Name is a required field",
          })}
        ></input>
        {errors.name && <span>Enter the letters only</span>}

        <label>Email</label>
        <input
          type="text"
          name="email"
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            required: "Email is a required field",
          })}
        ></input>
        {errors.email && <span>Enter the letters only</span>}

        <label>Username</label>
        <input
          type="text"
          name="username"
          {...register("username", {
            pattern: /^[A-Za-z]+$/i,
            required: "Username is a required field",
          })}
        ></input>
        {errors.username && <span>Enter the letters only</span>}

        <button
          className="createButton"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          
          Submit
        </button>
      </form>
    </>
  );
};
export default CreateUsers;
