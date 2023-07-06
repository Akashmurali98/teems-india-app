import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { selectFormData } from "../../store/Role/Reducers";
import { selectFormData as selectDeptData } from "../../store/Department/Reducers";
import { createUser } from "../../store/User/actions";
import "../../Css/CreateUser.css";

const CreateUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm("onTouched");

  const dispatch = useDispatch();

  const listRole = useSelector(selectFormData);
  const listDept = useSelector(selectDeptData);

  const password = watch("password");

  const onSubmit = (data) => {
    delete data.confirmpassword;
    dispatch(createUser(data));
  };

  return (
    <>
      <form className="usersForm">
        {/* <label>Name</label> */}
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

        {/* <label>Email</label> */}
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

        {/* <label>Username</label> */}
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
            defaultChecked
            {...register("is_active")}
          />
        </span>
      
        <span className="checkbox">
          Is Admin
          <input type="checkbox" name="is_admin" {...register("is_admin")} />
        </span>
        <br />

        <select {...register("roles")} defaultValue={"Aaksh "}>
          <option key="" value={""}>
            Select Roles
          </option>
          {listRole?.map((item, index) => (
            <option key={index} value={[item.id]}>
              {item.name}
            </option>
          ))}
          <br />
        </select>
        <select {...register("departments")}>
          <option key="" value={""}>
            Select Departments
          </option>
          {listDept?.map((item, index) => (
            <option key={index} value={[item.id]}>
              {item.name}
            </option>
          ))}
        </select>

        {/* <label>Password</label> */}
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

        {/* <label>Confirm Password</label> */}
        <input
        placeholder="Confirm Password"
          type="password"
          name="confirmpassword"
          {...register("confirmpassword", {
            required: "Enter the password",
            validate: (value) => value === password || "Passwords do not match", // Validate against the password value
          })}
        />
        {errors.confirmpassword && (
          <span>{errors.confirmpassword.message}</span>
        )}
        <br />
        <button
          className="createUser-btn"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default CreateUser;
