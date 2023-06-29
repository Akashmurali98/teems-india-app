import React from "react";
import { useForm } from "react-hook-form";
<<<<<<< Updated upstream
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

import "../../Component css/Create.css";
=======
import { useNavigate } from "react-router-dom";
import "../../assets/Css/Create.css";
import { useDispatch, useSelector } from "react-redux";
// import { createRole } from "../../store/Reducers";
import { createRole } from "../../store/Role/actions";
import { Loader } from "../../store/main/action";
import RolesApi from "../../Service/Roles";
>>>>>>> Stashed changes

const CreateRole = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.role.roleData);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm("onTouched");

  const onSubmit = (data) => {
    const token = sessionStorage.getItem("token");
    dispatch(createRole(data));
    dispatch(Loader());
    const obj = new RolesApi();
    console.log(obj.status, "create");
    // console.log("pn Submittt");
    // axios
    //   .post(
    //     `/dev/api/role`,
    //     {
    //       name: data.roles,
    //     },
    //     {
    //       headers: {
    //         Accept: "*/*",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then(
    //     (response) => {
    //       console.log(response);
    //       navigate("/rolesList");
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  };

  return (
    <>
      <h2>Create Roles</h2>
      <form className="createRole">
        <label>Roles</label>
        <input
          type="text"
          name="roles"
          {...register("roles", {
            pattern: /^[A-Za-z]+$/i,
            required: "Roles is a required field",
          })}
        ></input>
        {errors.roles && <span>Enter the letters only</span>}

        <br />
        {/* <input type="submit">Create</input> */}
        <button
          className="createButton"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Create
        </button>
      </form>
    </>
  );
};

export default CreateRole;
