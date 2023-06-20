import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Component css/RolesList.css";
import Header from "../Header";
import { Link } from "react-router-dom";
import view from "../../Images/visibility.png";
import edit from "../../Images/create.png";
import deleted from "../../Images/delete.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RolesList = () => {
  const [data, setData] = useState([]);
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // console.log(token);
    axios
      .get("dev/api/role", {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        consol/e.error(error);
      });
  }, [data]);

  const handleView = (selectedId) => {
    const id = selectedId;
    navigate(`view/${id}`);
  };

  const handleDelete = (selectedId) => {
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
            console.log(response);
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
  };

  return (
    <>
      <h1 className="rolesHead">Roles</h1>
      <table className="roleList">
        <caption>
          {" "}
          <Link to="createRole">
            <button className="create-roleList">Create Role</button>
          </Link>
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Roles</th>
            <th>Employee Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text"></input>
            </td>
            <td>
              <input type="text"></input>
            </td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>
                <img src={view}></img>
                <img src={edit} onClick={() => handleView(item.id)}></img>

                <img src={deleted} onClick={() => handleDelete(item.id)}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RolesList;
