import RolesApi from "../../Service/Roles";
import { createRole, deleteRole, viewRole, listRole } from "./reducers";

export const listrole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);

  rolesApiObj
    .listRole()
    .then((value) => {
      dispatch(listRole(value));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const createrole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);
  return new Promise((resolve) => {
    rolesApiObj
      .createRole(data)
      .then((value) => {
        dispatch(createRole(value));
        resolve(value);
        console.log(value)
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export const deleterole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);
  rolesApiObj
    .deleteRole(data)
    .then((value) => {
      dispatch(deleteRole(value));
      console.log("Role", value);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const viewrole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);
  rolesApiObj
    .viewRole(data)
    .then((value) => {
      dispatch(viewRole(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
