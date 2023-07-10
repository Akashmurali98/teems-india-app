import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { selectFormData } from "../../store/Role/Reducers";
import { selectFormData as selectDeptData } from "../../store/Department/Reducers";
import { listrole as Role } from "../../store/Role/actions";
import { create, editUser, view } from "../../store/User/Actions";
import "../../Css/CreateUser.css";
import { listdept as Dept } from "../../store/Department/action";

const CreateUser = () => {
  const dispatch = useDispatch();

  const selectedid = useParams();

  let id = selectedid.id;
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm("onTouched");

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
          setValue("name", name);
          setValue("email", email);
          setValue("username", username);
          setValue("is_active", is_active);
          setValue("is_admin", is_admin);
          setValue("departments", departments[0].id);
          setValue("roles", roles[0].id);
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
  const password = watch("password");

  const onSubmit = (data) => {
    delete data.confirmpassword;
    dispatch(create(data));
  };

  const onUpdate = (data) => {
    data.id = id;
    dispatch(editUser(data));
    reset();
  };

  const hidePassword = !!id;

  return (
    <>
      {name}
      <form className="usersForm">
        <input
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
          placeholder="email"
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
          <input type="checkbox" name="is_active" {...register("is_active")} />
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

        {errors.departments && <span>{errors.departments.message}</span>}

        {!hidePassword && (
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
            />
            {errors.password && <span>{errors.password.message}</span>}
            <input
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
        <br />

        <button
          className="createUser-btn"
          type="submit"
          onClick={handleSubmit(id ? onUpdate : onSubmit)}
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </>
  );
};
export default CreateUser;
