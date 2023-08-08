import React from "react";
import TextArea from "./TextArea";
import DropDown from "./DropDown";
import TextField from "./TextField";
import CheckBox from "./Checkbox";
import RadioButton from "./RadioButton";

const componentMap = {
  text: TextField,
  textarea: TextArea,
  select: DropDown,
  checkBox: CheckBox,
  radioButton: RadioButton,
};

export const getComponentByName = (item) => {
  const Component = componentMap[item];
  console.log(item);
  if (Component) {
    return <Component field={item}></Component>;
  }
  return null;
};
