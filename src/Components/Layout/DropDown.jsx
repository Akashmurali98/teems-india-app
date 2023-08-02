import React from "react";

const DropDown = ({ field }) => {
  return (
    <>
      <label for="dropdown">Select :</label>
      <select id="dropdown" name="dropdown">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </>
  );
};

export default DropDown;

