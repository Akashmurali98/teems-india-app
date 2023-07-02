import UsersApi from "../../Service/Users";
import { listusers } from "./Reducers";

export const list = () => (dispatch) => {
  const usersApiObj = new UsersApi();
  usersApiObj
    .listUsers()
    .then((value) => {
      dispatch(listusers(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
