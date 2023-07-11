import UsersApi from "../../Service/Users";
import {
  listUser,
  deleteUser as deleteusers,
  editUser as editUsers,
  viewUser as viewUsers,
  createUser,
} from "./Reducers";

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

export const view = (id) => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  return new Promise((resolve) => {
    usersApiObj
      .viewUsers(id)
      .then((value) => {
        dispatch(viewUsers(value));
        resolve(value);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export const deleteUser = (data) => (dispatch) => {
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

export const create = (data) => (dispatch) => {
  const usersApiObj = new UsersApi(dispatch);
  usersApiObj
    .createUsers(data)
    .then((value) => {
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
