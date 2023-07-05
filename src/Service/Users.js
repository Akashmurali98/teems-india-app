import axios from "axios";

class UsersApi {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  listUsers() {
    const token = sessionStorage.getItem("token");
    return new Promise((resolve) => {
      axios
        .get("dev/api/user", {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data.data);})
        .catch((error) => {
          console.log(error);
        });
    });
  }
}

export default UsersApi;
