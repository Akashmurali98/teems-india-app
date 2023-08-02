const DynamicData = [
  {
    fieldType: "textField",
    name: "name",
    type: "text",
    placeholder: "Name",
    inputValidations: {
      required: "Enter the name",
    },
  },
  {
    fieldType: "textArea",
    name: "departments",
    option: "Select Departments",
    data: dept,
    inputValidations: {
      required: "Please select a department",
    },
  },
  {
    fieldType: "selectdeptField",
    name: "departments",
    option: "Select Departments",
    data: dept,
    inputValidations: {
      required: "Please select a department",
    },
  },
];
