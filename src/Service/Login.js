import axios from "axios";
import { setLoader } from "../store/main/reducers";

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
          const data = response?.data?.data?.roles[0]?.name;
          const token = response?.data?.data?.token
          sessionStorage.setItem("userDetails", data);
          sessionStorage.setItem("token", token);          
          resolve(response?.data?.data);
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
