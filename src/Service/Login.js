import axios from "axios";

class LoginApi {
  authentication(data) {
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
          resolve(token);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}

export default LoginApi;
