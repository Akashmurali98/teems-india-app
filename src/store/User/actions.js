import UsersApi from "../../Service/Users";
import { listUser, deleteUser  } from "./Reducers";

export const list = () => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  usersApiObj
    .ListUser()
    .then((value) => {
      dispatch(listUser(value));
    })
    .catch((error) => {
      console.error(error);
    });
};



export const userDelete = (data) => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  usersApiObj
    .DeleteUser(data)
    .then((value) => {
      dispatch(deleteUser(value));
    })
    .catch((error) => {
      console.error(error);
    });
};
