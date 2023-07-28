const DynamicData = [
  {
    fieldType: "nameField",
    name: "name",
    type: "text",
    placeholder: "Name",
    inputValidations: {
      required: "Enter the name",
      pattern: {
        value: /^[A-Za-z ]+$/,
        message: "Alphabets only required",
      },
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
