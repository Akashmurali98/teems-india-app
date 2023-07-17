import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useParams } from "react-router-dom";

import { selectFormData } from "../../store/Role/Reducers";
import { selectFormData as selectDeptData } from "../../store/Department/Reducers";
import { listrole as Role } from "../../store/Role/actions";
import { create, editUser, view } from "../../store/User/Actions";
import { listdept as Dept } from "../../store/Department/action";
import { inputsFields } from "../../InputField/Data";
import { getComponentByType } from "../../InputField/getComponentByType";

import "../../Css/CreateUser.css";

const CreateUser = () => {
  const dispatch = useDispatch();

  const selectedid = useParams();
  const nestedInputs = useForm("onTouched");
  let id = selectedid.id;

  useEffect(() => {
    if (id) {
      dispatch(view(id))
        .then((selectedData) => {
          const {
            name,
            email,
            username,
            is_active,
            is_admin,
            roles,
            departments,
          } = selectedData;
          nestedInputs.setValue("name", name);
          nestedInputs.setValue("email", email);
          nestedInputs.setValue("username", username);
          nestedInputs.setValue("is_active", is_active);
          nestedInputs.setValue("is_admin", is_admin);
          nestedInputs.setValue("departments", departments[0].id);
          nestedInputs.setValue("roles", roles[0].id);
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch(Role());
      dispatch(Dept());
    }
  }, [id]);

  const listRole = useSelector(selectFormData);
  const listDept = useSelector(selectDeptData);
  const onSubmit = (data) => {
    delete data.confirmpassword;
    dispatch(create(data));
  };

  const onUpdate = (data) => {
    data.id = id;
    dispatch(editUser(data));
    reset();
  };

  const CheckPassword = (value) => {
    const isAlphabet = /[a-zA-Z]/.test(value);
    const isNumeric = /[0-9]/.test(value);
    const isspecialCharac = /[!@#$%^&*]/.test(value);
    return isAlphabet && isNumeric && isspecialCharac
      ? true
      : "Password required atleast one alphabet,special character and number ";
  };

  const CheckConfirmPassword = (value) => {
    const password = nestedInputs.getValues("password");
    return password === value
      ? true
      : "Confirm Password should match with the above";
  };

  const hidePassword = !!id;

  return (
    <>
      <FormProvider {...nestedInputs}>
        <form
          className="usersForm"
          onSubmit={nestedInputs.handleSubmit(onSubmit)}
        >
          {inputsFields(
            hidePassword,
            CheckPassword,
            CheckConfirmPassword,
            listRole,
            listDept
          ).map((item, index) => {
            return <span key={index}> {getComponentByType(item, index)}</span>;
          })}

          {/* <input
            placeholder="Name"
            type="text"
            name="name"
            {...register("name", {
              required: "Enter the name",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Alphabets only required",
              },
              maxLength: {
                value: 100,
                message: "Maximum length exceeded",
              },
            })}
          ></input>

          {errors.name && <span>{errors?.name.message}</span>}

          <input
            placeholder="Email"
            type="text"
            name="email"
            {...register("email", {
              required: "Enter an email address",
              pattern: {
                value: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors?.email && <span>{errors.email.message}</span>}
          <input
            placeholder="User Name"
            type="text"
            name="username"
            {...register("username", {
              required: "Enter the username",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Alphabets only required",
              },
              maxLength: {
                value: 100,
                message: "Maximum length exceeded",
              },
            })}
          ></input>
          {errors?.username && <span>{errors?.username.message}</span>}
          <br></br>
          <span className="checkbox">
            Is Active
            <input
              type="checkbox"
              name="is_active"
              {...register("is_active")}
            />
          </span>

          <span className="checkbox">
            Is Admin
            <input type="checkbox" name="is_admin" {...register("is_admin")} />
          </span>
          <br />
          <select
            placeholder="Select Roles"
            {...register("roles", { required: "Please select a role" })}
          >
            <option> Select Roles</option>
            {listRole?.map((item, index) => (
              <option key={index} value={[item.id]}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.roles && <span>{errors.roles.message}</span>}

          <select
            {...register("departments", {
              required: "Please select a department",
            })}
            required
          >
            <option> Select Departments</option>

            {listDept?.map((item, index) => (
              <option key={index} value={[item.id]}>
                {item.name}
              </option>
            ))}
          </select>

          {errors.departments && <span>{errors.departments.message}</span>} */}

          {/* {!hidePassword && (
            <>
              <input
                placeholder="Password"
                type="password"
                name="password"
                {...register("password", {
                  required: "Enter the password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              /> */}
          {/* {errors.password && <span>{errors.password.message}</span>} */}
          {/* <input
                placeholder="Confirm Password"
                type="password"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: "Enter the password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmpassword && (
                <span>{errors.confirmpassword.message}</span>
              )}
            </>
          )}
          <br /> */}

          <button className="createUser-btn" type="submit">
            {id ? "Update" : "Create"}
          </button>
        </form>
      </FormProvider>
    </>
  );
};
export default CreateUser;
