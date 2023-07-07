import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { selectFormData } from "../../store/Role/Reducers";
import { selectFormData as selectDeptData } from "../../store/Department/Reducers";
import { createUser, editUser } from "../../store/User/actions";
import { selectUserData } from "../../store/User/Reducers";
import "../../Css/CreateUser.css";

const CreateUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm("onTouched");
  const selectedid = useParams();
  const id = selectedid.id;

  const data = useSelector(selectUserData);
  const selectedData = id ? data.find((item) => item.id == id) : "";
  const { name, email, username, is_active, roles, departments } = selectedData;
  const dispatch = useDispatch();
  const listRole = useSelector(selectFormData);
  const listDept = useSelector(selectDeptData);

  const password = watch("password");

  const onSubmit = (data) => {
    delete data.confirmpassword;
    dispatch(createUser(data));
  };
  const onUpdate = (data) => {
    data.id = id;
    dispatch(editUser(data));
  };

  const hidePassword = !!id;

  return (
    <>
      <form className="usersForm">
        <input
          placeholder="Name"
          type="text"
          name="name"
          defaultValue={name}
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
          defaultValue={email}
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
          defaultValue={username}
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
            defaultChecked={is_active ? is_active : false}
            {...register("is_active")}
          />
        </span>

        <span className="checkbox">
          Is Admin
          <input type="checkbox" name="is_admin" {...register("is_admin")} />
        </span>
        <br />
        <select
          {...register("roles", { required: "Please select a role" })}
          required
        >
          <option key="" value={hidePassword ? roles[0].id : ""}>
            {hidePassword ? roles[0].name : "Select Roles"}
          </option>
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
          <option key="" value={hidePassword ? departments[0].id : ""}>
            {hidePassword ? departments[0].name : "Select Departments"}
          </option>
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
        {id ? (
          <button
            className="createUser-btn"
            type="submit"
            onClick={handleSubmit(onUpdate)}
          >
            Update
          </button>
        ) : (
          <button
            className="createUser-btn"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Create
          </button>
        )}
      </form>
    </>
  );
};
export default CreateUser;
