import RolesApi from "../../Service/Roles";
import { createdrole, deleterole, viewrole, listrole } from "./Reducers";

export const listRole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);
  rolesApiObj
    .listRole().then((value) => {
      dispatch(listrole(value));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const createRole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);
  rolesApiObj
    .createRole(data)
    .then((value) => {
      dispatch(createdrole(value));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteRole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);
  rolesApiObj
    .deleteRole(data)
    .then((value) => {
      dispatch(deleterole(value));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const viewRole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi(dispatch);
  rolesApiObj
    .viewRole(data)
    .then((value) => {
      dispatch(viewrole(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
