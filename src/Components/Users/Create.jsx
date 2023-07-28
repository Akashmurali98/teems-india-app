import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { selectFormData } from "../../store/Role/reducers";
import { selectFormData as selectDeptData } from "../../store/Department/reducers";
import { listrole as Role } from "../../store/Role/actions";
import { create, editUser, view } from "../../store/User/Actions";
import { listdept as Dept } from "../../store/Department/action";
import { getComponentByType } from "../../InputField/GetComponentByType";
import { inputsFields } from "../../InputField/Data";
import Button from "../../Shared/Button";
import "../../assets/Css/CreateUser.css";

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
            departments,
            roles,
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

  const checkPassword = (value) => {
    const isAlphabet = /[a-zA-Z]/.test(value);
    const isNumeric = /[0-9]/.test(value);
    const isspecialCharac = /[!@#$%^&*]/.test(value);
    return isAlphabet && isNumeric && isspecialCharac
      ? true
      : "Password required atleast one alphabet,special character and number ";
  };

  const checkConfirmPassword = (value) => {
    const password = nestedInputs.getValues("password");
    return password === value
      ? true
      : "Confirm Password should match with the above";
  };

  const hidePassword = !!id;

  return (
    <>
      <Button />
      <FormProvider {...nestedInputs}>
        <form
          className="usersForm"
          onSubmit={nestedInputs.handleSubmit(id ? onUpdate : onSubmit)}
        >
          {inputsFields(
            hidePassword,
            checkPassword,
            checkConfirmPassword,
            listRole,
            listDept
          ).map((item, index) => {
            return <span key={index}> {getComponentByType(item, index)}</span>;
          })}
          <button className="createUser-btn" type="submit">
            {id ? "Update" : "Create"}
          </button>
        </form>
      </FormProvider>
    </>
  );
};
export default CreateUser;
