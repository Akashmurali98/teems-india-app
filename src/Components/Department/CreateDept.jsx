import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import React from "react";

import "../../assets/Css/CreateDept.css";
import { createdept as createDept } from "../../store/Department/action";
import { deptData } from "../../InputField/Data";
import { getComponentByType } from "../../InputField/getComponentByType";

const CreateDept = () => {
  const dispatch = useDispatch();
  const nestedInputs = useForm();
  const onSubmit = (data) => {
    dispatch(createDept(data));
  };

  return (
    <>
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
