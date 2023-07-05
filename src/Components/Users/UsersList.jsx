import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import edit from "../../assets/Images/create.png";
import view from "../../assets/Images/visibility.png";
import deleted from "../../assets/Images/delete.png";
import { list } from "../../store/User/actions";
import { selectUserData } from "../../store/User/Reducers";
import { listdept } from "../../store/Department/action";
import { listrole } from "../../store/Role/actions";
import { deleteUser } from "../../store/User/actions";

import "../../Css/UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const listData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(list());
    dispatch(listrole());
    dispatch(listdept());
  }, []);

  const tableStyle = {
    width: "100%",
  };
  const thStyle = {
    width: "10%",
  };

  return (
    <>
      <h1 className="usersHead">Users</h1>
      <table className="usersList" style={tableStyle}>
        <caption>
          <Link to="/userlist/create">
            <button className="create-usersList">Create Role</button>
          </Link>
        </caption>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Email</th>
            <th style={thStyle}>Username</th>
            <th style={thStyle}>Roles</th>
            <th style={thStyle}>Departments</th>
            <th style={thStyle}>Active</th>
            <th style={thStyle}>Admin </th>
            <th style={thStyle}>Action </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <input type="text" />{" "}
            </td>
            <td>
              {" "}
              <input type="text" />{" "}
            </td>
            <td>
              {" "}
              <input type="text" />{" "}
            </td>
            <td>
              {" "}
              <input type="text" />{" "}
            </td>
            <td>
              {" "}
              <input type="text" />{" "}
            </td>
            <td></td>
            <td></td>
          </tr>
          {listData?.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item?.roles[0]?.name}</td>
              <td>{item?.departments[0]?.name}</td>
              <td>
                {item.is_active ? (
                  <input type="checkbox" checked readOnly />
                ) : (
                  <input type="checkbox" />
                )}
              </td>
              <td>{item.is_admin ? "Yes" : "No"}</td>
              <td>
                <img src={view}></img>
                <img
                  src={deleted}
                  onClick={() => dispatch(deleteUser(item.id))}
                ></img>
                <img src={edit}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
