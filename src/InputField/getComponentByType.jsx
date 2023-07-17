import React from "react";
import FieldInput from "./FieldInput";
import FieldCheckbox from "./FieldCheckbox";
import FieldPassword from "./FieldPassword";
import FieldSelect from "./FieldSelect";

const componentMap = {
  nameField: FieldInput,
  emailField: FieldInput,
  userNameField: FieldInput,
  checkField: FieldCheckbox,
  selectroleField: FieldSelect,
  selectdeptField: FieldSelect,
  passwordField: FieldInput,
  confirmPassword: FieldPassword,
  rolesField: FieldPassword,
  deptField: FieldPassword,
};

export const getComponentByType = (item) => {
  const Component = componentMap[item.fieldType];
  if (Component) {
    return <Component field={item}></Component>;
  }
  return null;
};
