import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { list } from "../../store/Users/actions";
import "../../Css/UserList.css";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(list());
  }, []);

  return (
    <>
      <h1 className="usersHead">Users</h1>
      <table className="usersList">
        <caption>
          {" "}
          <Link to="/userslist/create">
            <button className="create-usersList">Create Role</button>
          </Link>
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Active</th>
            <th>Admin </th>
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
        </tbody>
      </table>
    </>
  );
};

export default UserList;
