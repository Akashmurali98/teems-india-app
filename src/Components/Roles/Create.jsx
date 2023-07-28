import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import React from "react";
import { createrole as createRole } from "../../store/Role/actions";
import { roleData } from "../../InputField/Data";
import { useNavigate } from "react-router-dom";
import "../../assets/Css/Create.css";
import { getComponentByType } from "../../InputField/GetComponentByType";
import Button from "../../Shared/Button";

const CreateRole = () => {
  const dispatch = useDispatch();
  const nestedInputs = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(createRole(data))
      .then((value) => {
        if (value) {
          navigate("/rolelist");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Button />
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
