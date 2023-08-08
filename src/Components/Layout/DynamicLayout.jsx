import React, { useEffect, useState } from "react";
import Popup from "./PopUp";
import { getComponentByName } from "./getComponentByName";
import {
  createWorkFlow,
  editWorkFLow,
  selectWorkFLow,
} from "../../store/WorkFlow/actions";
import { useDispatch } from "react-redux";
import edit from "../../assets/Images/create.png";
import deletee from "../../assets/Images/delete.png";
import { inputFieldData } from "./DynamicData";

import "../../assets/Css/DynamicLayout.css";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const DynamicLayout = () => {
  const [sectionAdd, setSectionAdd] = useState(false);
  const [data, setData] = useState([]);
  const [addSec, setAddSec] = useState("");
  const [dynamicForm, setDynamicForm] = useState("");
  const [mainData, setmainData] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const selectedId = params.id;
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (selectedId) {
      dispatch(selectWorkFLow(selectedId))
        .then((value) => {
          const { name } = value;
          console.log(value);
          setValue("dynamicForm", name);
          setAddSec(value.form_sections[0].name);
          setData(value.form_sections[0].fields);
          console.log(value.form_sections[0].fields);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const addSection = (input) => {
    console.log(data);
    setData((prevData) => [...prevData, input]);
  };

  const inputDelete = (input) => {
    const newData = data.filter((item, index) => {
      return input !== index;
    });
    setData(newData);
  };

  const handleWorkFLowCreate = (fieldName) => {
    const finalData = {
      name: fieldName.dynamicForm,
      form_sections: [{ name: addSec, column_type: "2", fields: data }],
    };
    setmainData(finalData);
    dispatch(createWorkFlow(finalData));
  };

  const handleWorkFLowEdit = (fieldName) => {
    const finalData = {
      name: fieldName.dynamicForm,
      form_sections: [{ name: addSec, column_type: "2", fields: data }],
    };
    setmainData(finalData);
    dispatch(editWorkFLow(selectedId, finalData));
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
        <form
          onSubmit={handleSubmit(
            selectedId ? handleWorkFLowEdit : handleWorkFLowCreate
          )}
        >
          <header className="dyn-header">
            <input
              type="text"
              placeholder="Workflow Name"
              {...register("dynamicForm", { required: true })}
            />
            {errors.dynamicForm && (
              <span className="error">Workflow Name is required</span>
            )}
            <button className="dyn-btn">Dynamic Form</button>
            <button className="createForm">Create</button>
          </header>
        </form>
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
        {
          <span className="dyn-sidebar">
            {data.map((item, index) => {
              return (
                <span className="components" key={index}>
                  {getComponentByName(item.type)}{" "}
                  <img src={deletee} onClick={() => inputDelete(index)}></img>{" "}
                  <img src={edit}></img>{" "}
                </span>
              );
            })}
          </span>
        }
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
