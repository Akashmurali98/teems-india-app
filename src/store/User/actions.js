import UsersApi from "../../Service/Users";
import { listusers, deleteUser as deleteusers } from "./Reducers";

export const list = () => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  usersApiObj
    .listUsers()
    .then((value) => {
      dispatch(listusers(value));
    })
    .catch((error) => {
      console.error(error);
    });
};



export const deleteUser = (data) => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  console.log(data);
  usersApiObj
    .deleteUsers(data)
    .then((value) => {
      dispatch(deleteusers(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
