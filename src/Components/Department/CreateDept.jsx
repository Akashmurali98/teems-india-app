import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../../assets/Css/CreateDept.css";
import { createdept } from "../../store/Department/action";

const CreateDept = () => {
  const selectedId = useParams();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createdept(data));
  };

  return (
    <>
      <h2>Create Department</h2>
      <form className="createDeptForm" onSubmit={handleSubmit(onSubmit)}>
        <label>Department Name</label>
        <input
          type="text"
          {...register("department", {
            required: "Enter the name",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Alphabets only required",
            },
          })}
        ></input>
        {errors.roles && <span>{errors.roles?.message}</span>}
        <button className="createDept-btn" type="submit">
          Create Department
        </button>
      </form>
    </>
  );
};

export default CreateDept;
