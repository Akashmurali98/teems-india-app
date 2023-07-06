import axios from "axios";
import { setLoader } from "../store/main/Reducers";
import Swal from "sweetalert2";

class UsersApi {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  createUsers(data) {
    const token = sessionStorage.getItem("token");
    this.dispatch(setLoader(true));
    const updatedData = {
      ...data,
      roles: [parseInt(data.roles)],
      departments: [parseInt(data.departments)],
    };
    const {
      name,
      email,
      username,
      password,
      is_active,
      is_admin,
      roles,
      departments,
    } = updatedData;

    return new Promise((resolve) => {
      axios
        .post(
          `/dev/api/user`,
          {
            name: name,
            email: email,
            username: username,
            password: password,
            is_active: is_active,
            is_admin: is_admin,
            roles: roles,
            departments: departments,
          },
          {
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(
          (response) => {
            resolve(response.data.data);
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => {
          this.dispatch(setLoader(false));
        });
    });
  }
  listUsers() {
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

  deleteUsers(selectedId) {
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
