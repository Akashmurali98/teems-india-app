import React, { useState } from "react";
import Popup from "./PopUp";
import { getComponentByName } from "./getComponentByName";
import { createWorkFlow } from "../../store/WorkFlow/actions";
import { useDispatch } from "react-redux";
import edit from "../../assets/Images/create.png";
import deletee from "../../assets/Images/delete.png";

import "../../assets/Css/DynamicLayout.css";
import { inputFieldData } from "./DynamicData";

const DynamicLayout = () => {
  const [sectionAdd, setSectionAdd] = useState(false);
  const [data, setData] = useState([]);
  const [addSec, setAddSec] = useState("");
  const [dynamicForm, setDynamicForm] = useState("");
  const [mainData, setmainData] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const addSection = (input) => {
    setData((prevData) => [...prevData, input]);
  };

  const inputDelete = (input) => {
    const selected = data;
    const result = selected.splice(input, 1);
    setData(selected);
  };

  const handleWorkFLowCreate = () => {
    const finalData = {
      name: dynamicForm,
      form_sections: [{ name: addSec, column_type: "2", fields: data }],
    };
    setmainData(finalData);
    dispatch(createWorkFlow(finalData))
      .then((value) => {
        console.log(value);
        console.log("Actions");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCretePop = () => {
    if (!addSec) {
      setError("Create section cannot be empty ");
    } else {
      setSectionAdd(false);
    }
  };

  const title = [
    "Textbox",
    "Multi-Line Textbox",
    "Dropdown",
    "Multi - Select Dropdown",
    "Checkbox",
    "Radio Button",
  ];
  const inputFields = inputFieldData;

  return (
    <div className="parent">
      <div className={sectionAdd ? "DynamicLayoutBlur" : "DynamicLayout"}>
        <header className="dyn-header">
          <input
            type="text"
            placeholder="Workflow Name"
            onChange={(event) => setDynamicForm(event.target.value)}
          ></input>
          <button className="dyn-btn">Dynamic Form</button>
          <button className="createForm" onClick={() => handleWorkFLowCreate()}>
            Create
          </button>
        </header>
        <aside className="dyn-aside">
          <button
            className="add-section"
            onClick={() => setSectionAdd(!sectionAdd)}
          >
            + Add Section
          </button>

          {title.map((item, index) => {
            return (
              <button
                className="add-btn"
                key={index}
                onClick={() => addSection(inputFields[index])}
              >
                {item}
              </button>
            );
          })}
        </aside>
        {addSec && (
          <span className="dyn-sidebar">
            {data.map((item, index) => {
              return (
                <span className="components" key={index}>
                  {getComponentByName(item.fieldType)}{" "}
                  <img src={deletee} onClick={() => inputDelete(index)}></img>{" "}
                  <img src={edit}></img>{" "}
                </span>
              );
            })}
          </span>
        )}
      </div>

      {sectionAdd && (
        <Popup
          handleChange={setAddSec}
          handlePop={setSectionAdd}
          handleClick={handleCretePop}
        />
      )}
    </div>
  );
};

export default DynamicLayout;
