import axios from "axios";
import Swal from "sweetalert2";

class DeptApi {
  createDept(data) {
    console.log(data);
    const token = sessionStorage.getItem("token");

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
            console.log(response);
            // navigate("/departmentList");
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  listDept(data) {
    const token = sessionStorage.getItem("token");
    return new Promise((resolve) => {
      axios
        .get("dev/api/department", {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          resolve(response.data.data);
          // resolve(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  viewDept(selectedId) {
    const token = sessionStorage.getItem("token");

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
            console.log(response);
            resolve(response.data.data);
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  deleteDept(selectedId) {
    const token = sessionStorage.getItem("token");
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
              console.log(response);
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

export default DeptApi;
