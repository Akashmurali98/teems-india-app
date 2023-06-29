import axios from "axios";
import React, { useEffect, useState } from "react";
<<<<<<< Updated upstream
import "../../Component css/RolesList.css";
import Header from "../Header";
=======
import "../../assets/Css/RolesList.css";
>>>>>>> Stashed changes
import { Link } from "react-router-dom";
import view from "../../assets/Images/visibility.png";
import edit from "../../assets/Images/create.png";
import deleted from "../../assets/Images//delete.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { Outlet } from "react-router-dom";
import { selectFormData } from "../../store/Role/Reducers";
import { deleteRole, listRole, viewRole } from "../../store/Role/actions";

const RolesList = () => {
  const [data, setData] = useState([]);
  const id = useParams();
  const navigate = useNavigate();
  const listData = useSelector(selectFormData);
  const dispatch = useDispatch();
  useEffect(() => {
<<<<<<< Updated upstream
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
=======
    dispatch(listRole(data));
  }, []);
>>>>>>> Stashed changes

  const handleView = (selectedId) => {
    navigate(`viewRole/${selectedId}`);
    dispatch(viewRole(selectedId));
  };

  const handleDelete = (selectedId) => {
    dispatch(deleteRole(selectedId));
  };

  return (
    <>
      <h1 className="rolesHead">Roles</h1>
      <table className="roleList">
        <caption>
          {" "}
          <Link to="/rolesList/createRole">
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
          {listData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>
                <img src={view} onClick={() => handleView(item.id)}></img>
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
