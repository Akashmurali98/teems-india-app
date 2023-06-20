import React, { useEffect, useState } from "react";
import { Component } from "react";
import "../../Component css/View.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const View = () => {
  const selectedId = useParams();
  const id = selectedId.id;
  const navigate = useNavigate();
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
  };

  return (
    <>
      
      <button className="update">Update</button>
      <button className="delete" onClick={() => handleDelete(selected.id)}>
        Delete
      </button>
      <table className="view">
        <tbody>
          <tr>
            <th>Roles</th>
            <td>{selected.name}</td>
          </tr>
          <tr>
            <th>Employee Id</th>
            <td>{selected.id}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default View;
