import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "../../assets/Css/RolesList.css";
import view from "../../assets/Images/visibility.png";
import deleted from "../../assets/Images//delete.png";
import { selectFormData } from "../../store/Role/Reducers";
import { deleteRole, listRole } from "../../store/Role/actions";

const RolesList = () => {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const listData = useSelector(selectFormData);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(listRole(data));
  }, []);

  const handleView = (selectedId) => {
    navigate(`viewRole/${selectedId}`);
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
          {listData?.map((item, index) => (
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
