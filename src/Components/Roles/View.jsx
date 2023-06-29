import React, { useEffect, useState } from "react";
<<<<<<< Updated upstream
import { Component } from "react";
import "../../Component css/View.css";
=======
import "../../assets/Css/View.css";

>>>>>>> Stashed changes
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../Shared/Header";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectViewData } from "../../store/Role/Reducers";

const View = () => {
  const selectedId = useParams();
  const id = selectedId.id;
  const viewData = useSelector(selectViewData);
  const navigate = useNavigate();
<<<<<<< Updated upstream
  // console.log(id);
  const [selected, setSelected] = useState([]);
  // console.log(id);
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get(`/dev/api/role/${id}`, {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          // console.log(response);
          setSelected(response.data.data);
          // console.log(response.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
  });

  const handleDelete = (id) => {
    console.log(id);
    const token = sessionStorage.getItem("token");
    axios
      .delete(`dev/api/role/${id}`, {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
=======

  const handleback = () => {
    navigate(-1);
>>>>>>> Stashed changes
  };

  return (
    <>
<<<<<<< Updated upstream
      
      <button className="update">Update</button>
      <button className="delete" onClick={() => handleDelete(selected.id)}>
        Delete
=======
      <button className="update" onClick={() => handleback()}>
        back
>>>>>>> Stashed changes
      </button>

      <table className="view">
        <tbody>
          <tr>
            <th>Roles</th>
            <td>{viewData.name}</td>
          </tr>
          <tr>
            <th>Employee Id</th>
            <td>{viewData.id}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default View;
