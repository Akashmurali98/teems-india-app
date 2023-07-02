import axios from "axios";
import { setLoader } from "../store/main/Reducers";

class LoginApi {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  authentication(data) {
    this.dispatch(setLoader(true));

    return new Promise((resolve) => {
      axios
        .post(
          "/dev/api/auth/login",
          {
            username: data.username,
            password: data.password,
          },
          {
            headers: {
              Accept: "*/*",
            },
          }
        )
        .then((response) => {
          const token = response.data.data.token;
          sessionStorage.setItem("token", token);
          this.dispatch(setLoader(false));

          resolve(token);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.dispatch(setLoader(false));
        });
    });
  }
}

export default LoginApi;
