import axios from "axios";
import Swal from "sweetalert2";
import { loaderOpening } from "../store/main/Reducers";

class UsersApi {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  listUsers(data) {
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
          console.log(response.data.data);
          resolve(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}

export default UsersApi;
