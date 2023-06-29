import RolesApi from "../../Service/Roles";
import { createdrole, deleterole, viewrole, listrole } from "./Reducers";

export const listRole = (data) => (dispatch) => {
  const rolesApiObj = new RolesApi();
  UsersApiObj
    .listUsers().then((value) => {
      dispatch(listrole(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
