import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import "../../Css/UserList.css";
import { list } from "store/Users/actions";

const UsersList = () => {
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
          <Link to="/usersList/create">
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

export default UsersList;
