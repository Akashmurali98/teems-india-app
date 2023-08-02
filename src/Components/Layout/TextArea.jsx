import React from "react";

const TextArea = ({ field }) => {
  return (
    <>
      <label>Text Area :</label>
      <textarea
        id="multilineInput"
        name="multilineInput"
        rows="1"
        cols="25"
        placeholder="Enter multiple lines of text here"
      />
    </>
  );
};

export default TextArea;

