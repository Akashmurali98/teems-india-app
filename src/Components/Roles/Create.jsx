import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import React from "react";

import { createrole as createRole } from "../../store/Role/actions";
import "../../assets/Css/Create.css";
import { roleData } from "../../InputField/Data";
import { getComponentByType } from "../../InputField/getComponentByType";

const CreateRole = () => {
  const dispatch = useDispatch();
  const nestedInputs = useForm();

  const onSubmit = (data) => {
    dispatch(createRole(data));
  };

  return (
    <>
      <h2>Create </h2>
      <FormProvider {...nestedInputs}>
        <form
          className="createRole"
          onSubmit={nestedInputs.handleSubmit(onSubmit)}
        >
          {roleData.map((field, index) => {
            return <div key={index}>{getComponentByType(field)}</div>;
          })}
          <br />
          <button className="createButton" type="submit">
            Create
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default CreateRole;
