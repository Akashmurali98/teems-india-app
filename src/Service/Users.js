import axios from "axios";
import Swal from "sweetalert2";

import { setLoader } from "../store/main/Reducers";

class UsersApi {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  ListUser() {
    const token = sessionStorage.getItem("token");
    this.dispatch(setLoader(true));

    return new Promise((resolve) => {
      axios
        .get("dev/api/user", {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.dispatch(setLoader(false));
        });
    });
  }

  DeleteUser(selectedId) {
    const token = sessionStorage.getItem("token");
    console.log();
    return new Promise((resolve) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes   ",
      }).then((result) => {
        if (result.isConfirmed) {
          const token = sessionStorage.getItem("token");
          axios
            .delete(`dev/api/user/${selectedId}`, {
              headers: {
                Accept: "*/*",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              resolve(selectedId);
              Swal.fire("Deleted!", "The role has been deleted.", "success");
            })
            .catch((error) => {
              console.error(error);
              Swal.fire(
                "Error",
                "An error occurred while deleting the role.",
                "error"
              );
            });
        }
      });
    });
  }
}

export default UsersApi;
