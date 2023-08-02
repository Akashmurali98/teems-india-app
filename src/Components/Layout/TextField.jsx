import React from "react";

const TextField = () => {
  return (
    <>
      <label>Name: </label>
      <input type="text"></input>
    </>
  );
};

export default TextField;

const data = { fieldType: "TextField", label: "Name", type: "text" };
