import React from "react";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import TextField from "./TextField";
import CheckBox from "./Checkbox";

const componentMap = {
  textField: TextField,
  textArea: TextArea,
  dropDown: DropDown,
  checkBox: CheckBox,
};

export const getComponentByName = (item) => {
  const Component = componentMap[item];

  if (Component) {
    return <Component field={item}></Component>;
  }
  return null;
};
