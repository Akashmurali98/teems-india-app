import LoginApi from "../../Service/Login";
import { currentuser } from "./reducers";

export const authentication = (data) => (dispatch) => {
  const loginApiObj = new LoginApi();
  return new Promise((resolve) => {
    loginApiObj
      .authentication(data)
      .then((value) => {
        dispatch(currentuser(value));
        resolve(true);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
