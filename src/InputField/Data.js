export const inputsFields = (
  isPasswordHide,
  checkPassword,
  checkConfirmPassword,
  role,
  dept
) => {
  return [
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
        maxLength: {
          value: 100,
          message: "Maximum length exceeded",
        },
      },
    },
    {
      fieldType: "emailField",
      name: "email",
      type: "text",
      placeholder: "Email",
      inputValidations: {
        required: "Enter an Email address",
        pattern: {
          value: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Invalid email format",
        },
      },
    },
    {
      fieldType: "userNameField",
      name: "username",
      type: "text",
      placeholder: "User Name",
      inputValidations: {
        required: "Enter the Username",
        pattern: {
          value: /^[A-Za-z ]+$/,
          message: "Alphabets only required",
        },
        maxLength: {
          value: 100,
          message: "Maximum length exceeded",
        },
      },
    },
    {
      fieldType: "checkField",
      name: "is_active",
      type: "checkbox",
      label: "Is Active",
    },
    {
      fieldType: "checkField",
      name: "is_admin",
      type: "checkbox",
      label: "Is Admin",
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
      fieldType: "selectroleField",
      name: "roles",
      option: "Select Roles",
      data: role,
      inputValidations: {
        required: "Please select a roles",
      },
    },
    isPasswordHide
      ? false
      : {
          name: "password",
          type: "password",
          placeholder: "Password",
          fieldType: "passwordField",
          inputValidations: {
            required: "Please select the Confirm password",
            validate: checkPassword,
          },
        },
    isPasswordHide
      ? false
      : {
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          fieldType: "confirmPassword",
          inputValidations: {
            required: "Please select the Confirm password",
            validate: checkConfirmPassword,
          },
        },
  ].filter(Boolean);
};

export const roleData = [
  {
    fieldType: "rolesField",
    name: "roles",
    type: "text",
    labelName: "Roles",
    inputValidations: {
      required: "Enter the name",
      pattern: {
        value: /^[A-Za-z ]+$/,
        message: "Alphabets only required",
      },
    },
  },
];

export const deptData = [
  {
    fieldType: "deptField",
    name: "departments",
    type: "text",
    labelName: "Departments",
    inputValidations: {
      required: "Enter the name",
      pattern: {
        value: /^[A-Za-z ]+$/,
        message: "Alphabets only required",
      },
    },
  },
];
