import axios from "axios";
import Swal from "sweetalert2";

import { loaderOpening } from "../store/main/Reducers";

class RolesApi {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  listRole(data) {
    const token = sessionStorage.getItem("token");
    return new Promise((resolve) => {
      axios
        .get("dev/api/role", {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  createRole(data) {
    const token = sessionStorage.getItem("token");
    this.dispatch(loaderOpening(true));

    return new Promise((resolve) => {
      axios
        .post(
          `/dev/api/role`,
          {
            name: data.roles,
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
            this.dispatch(loaderOpening(false));
          },
          (error) => {
            console.log(error);
            this.dispatch(loaderOpening(false));
          }
        );
    });
  }

  viewRole(selectedId) {
    const token = sessionStorage.getItem("token");
    this.dispatch(loaderOpening(true));

    return new Promise((resolve) => {
      axios
        .get(`/dev/api/role/${selectedId}`, {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            resolve(response.data.data);
            this.dispatch(loaderOpening(false));
          },
          (error) => {
            console.log(error);
            this.dispatch(loaderOpening(false));
          }
        );
    });
  }

  deleteRole(selectedId) {
    const token = sessionStorage.getItem("token");
    this.dispatch(loaderOpening(true));
    
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
            .delete(`dev/api/role/${selectedId}`, {
              headers: {
                Accept: "*/*",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              resolve(selectedId);
              Swal.fire("Deleted!", "The role has been deleted.", "success");
              this.dispatch(loaderOpening(false));
            })
            .catch((error) => {
              console.error(error);
              Swal.fire(
                "Error",
                "An error occurred while deleting the role.",
                "error"
              );
              this.dispatch(loaderOpening(false));
            });
        }
      });
    });
  }
}

export default RolesApi;
