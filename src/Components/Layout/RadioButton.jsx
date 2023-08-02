import { React } from "react";

const RadioButton = () => {
  return (
    <>
      <label>
        <input type="radio" name="options" value="Option 1" />
        Option 1
      </label>
      <label>
        <input type="radio" name="options" value="Option 2" />
        Option 2
      </label>
      <label>
        <input type="radio" name="options" value="Option 3" />
        Option 3
      </label>
    </>
  );
};

export default RadioButton;
