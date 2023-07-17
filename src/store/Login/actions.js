import LoginApi from "../../Service/Login";
import { currentuser } from "./Reducers";

export const authentication = (data) => (dispatch) => {
  const loginApiObj = new LoginApi(dispatch);
  return new Promise((resolve) => {
    loginApiObj
      .authentication(data)
      .then((value) => {
        dispatch(currentuser(value));
        resolve(value);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
