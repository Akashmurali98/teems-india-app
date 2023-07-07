import UsersApi from "../../Service/Users";
import { listusers, deleteUser as deleteusers,editUser as editUsers } from "./Reducers";

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

export const createUser = (data) => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  usersApiObj
    .createUsers(data)
    .then((value) => {
      console.log(value);
      dispatch(createUser(value));
    })
    .catch((error) => {
      console.error(error);
    });
};


export const editUser = (data) => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  usersApiObj
    .editUsers(data)
    .then((value) => {
      console.log(value);
      dispatch(editUsers(value));
    })
    .catch((error) => {
      console.error(error);
    });
};