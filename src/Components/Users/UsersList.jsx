import { Link } from "react-router-dom";

import React from "react";

const UsersList = () => {
  return (
    <>
      <h1 className="usersHead">Roles</h1>
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
          {/* {listData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>
                <img src={view}></img>
                <img src={edit}></img>

                <img src={deleted}></img>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
