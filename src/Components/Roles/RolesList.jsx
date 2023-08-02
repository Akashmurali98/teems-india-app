import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import view from "../../assets/Images/visibility.png";
import deleted from "../../assets/Images//delete.png";
import { selectFormData } from "../../store/Role/reducers";
import {
  deleterole as deleteRole,
  listrole as listRole,
} from "../../store/Role/actions";

import "../../assets/Css/RolesList.css";

const RoleList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const listData = useSelector(selectFormData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRole());
  }, []);

  return (
    <>
      <h1 className="rolesHead">Roles</h1>
      <table className="roleList">
        <caption>
          {" "}
          <Link to="/rolelist/createrole">
            <button className="create-roleList">Create</button>
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
                <img
                  src={view}
                  onClick={() => navigate(`viewrole/${item.id}`)}
                ></img>
                <img
                  src={deleted}
                  onClick={() => dispatch(deleteRole(item.id))}
                ></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RoleList;
