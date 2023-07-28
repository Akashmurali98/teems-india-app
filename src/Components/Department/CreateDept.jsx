import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import React from "react";

import { createdept as createDept } from "../../store/Department/action";
import { deptData } from "../../InputField/Data";
import { getComponentByType } from "../../InputField/GetComponentByType";
import { useNavigate } from "react-router-dom";

import "../../assets/Css/CreateDept.css";
import Button from "../../Shared/Button";

const CreateDept = () => {
  const dispatch = useDispatch();
  const nestedInputs = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(createDept(data))
      .then((value) => {
        console.log(value);
        if (value) {
          navigate("/departmentList");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Button />
      <h2>Create Department</h2>
      <FormProvider {...nestedInputs}>
        <form
          className="createDeptForm"
          onSubmit={nestedInputs.handleSubmit(onSubmit)}
        >
          {deptData.map((field, index) => {
            return <div key={index}>{getComponentByType(field)}</div>;
          })}
          <button className="createDept-btn" type="submit">
            Create
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default CreateDept;
