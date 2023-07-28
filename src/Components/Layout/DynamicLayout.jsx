import React, { useState } from "react";
import Popup from "./PopUp";
import { getComponentByName } from "./getComponentByName";
import deletee from "../../assets/Images/delete.png";
import edit from "../../assets/Images/create.png";

import "../../assets/Css/DynamicLayout.css";

const DynamicLayout = () => {
  const [sectionAdd, setSectionAdd] = useState(false);
  const [data, setData] = useState([]);
  const [create, setCreate] = useState("");
  const addSection = (input) => {
    setData((prevData) => [...prevData, input]);
  };
  const inputDelete = (input) => {
    const selected = data;
    const result = selected.splice(input, 1);
    setData(selected);
  };

  const handlePopUp = () => {
    setSectionAdd(!sectionAdd);
  };

  const handleChange = (event) => {
    setCreate(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="parent">
      <div className={sectionAdd ? "DynamicLayoutBlur" : "DynamicLayout"}>
        <header className="dyn-header">
          <input type="text" placeholder="Workflow Name"></input>
          <button className="dyn-btn">Dynamic Form</button>
          <button className="createForm">Create</button>
        </header>
        <aside className="dyn-aside">
          <button className="add-section" onClick={() => handlePopUp()}>
            + Add Section
          </button>
          <button className="add-btn" onClick={() => addSection("textField")}>
            Textbox
          </button>
          <button className="add-btn" onClick={() => addSection("textArea")}>
            Multi-Line Textbox
          </button>
          <button className="add-btn" onClick={() => addSection("dropDown")}>
            Dropdown
          </button>
          <button className="add-btn" onClick={() => addSection("dropDown")}>
            Multi - Select Dropdown
          </button>
          <button className="add-btn" onClick={() => addSection("checkBox")}>
            Checkbox
          </button>
          <button className="add-btn"> Radio Button</button>
        </aside>
        {create && (
          <span className="dyn-sidebar">
            {data.map((item, index) => {
              return (
                <span className="components" key={index}>
                  {getComponentByName(item)}{" "}
                  <img src={deletee} onClick={() => inputDelete(index)}></img>{" "}
                  <img src={edit}></img>{" "}
                </span>
              );
            })}
          </span>
        )}
      </div>

      {sectionAdd && (
        <Popup handleChange={handleChange} handlePop={handlePopUp} />
      )}
    </div>
  );
};

export default DynamicLayout;
