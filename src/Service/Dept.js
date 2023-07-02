import Swal from "sweetalert2";
import axios from "axios";

import { setLoader } from "../store/main/Reducers";

class DeptApi {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  createDept(data) {
    const token = sessionStorage.getItem("token");
    this.dispatch(setLoader(true));
    return new Promise((resolve) => {
      axios
        .post(
          `/dev/api/department`,
          {
            name: data.department,
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
            this.dispatch(setLoader(false));
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  listDept(data) {
    const token = sessionStorage.getItem("token");
    this.dispatch(setLoader(true));
    return new Promise((resolve) => {
      axios
        .get("dev/api/department", {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data.data);
          this.dispatch(setLoader(false));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.dispatch(setLoader(false));
        });
    });
  }

  viewDept(selectedId) {
    const token = sessionStorage.getItem("token");
    this.dispatch(setLoader(true));
    return new Promise((resolve) => {
      axios
        .get(`/dev/api/department/${selectedId}`, {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            resolve(response.data.data);
            this.dispatch(setLoader(false));
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

  deleteDept(selectedId) {
    const token = sessionStorage.getItem("token");
    this.dispatch(setLoader(true));
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
          axios
            .delete(`dev/api/department/${selectedId}`, {
              headers: {
                Accept: "*/*",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              resolve(selectedId);
              Swal.fire("Deleted!", "The role has been deleted.", "success");
              this.dispatch(setLoader(true));
            })
            .catch((error) => {
              console.error(error);
              Swal.fire(
                "Error",
                "An error occurred while deleting the role.",
                "error"
              );
            })
            .finally(() => {
              this.dispatch(setLoader(false));
            });
        } else {
          this.dispatch(setLoader(false));
        }
      });
    });
  }
}

export default DeptApi;