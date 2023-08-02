import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import edit from "../../assets/Images/create.png";
import deleted from "../../assets/Images/delete.png";
import { list } from "../../store/User/Actions";
import { selectUserData } from "../../store/User/reducers";
import { userDelete } from "../../store/User/Actions";

import "../../assets/Css/UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const listData = useSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(list());
  }, []);

  const inputFields = ["text", "text", "text", "text", "text"];
  const tableHead = [
    "Name",
    "Email",
    "Username",
    "Roles",
    "Departments",
    "Active",
    "Admin",
    "Action",
  ];
  return (
    <>
      <h1 className="usersHead">Users</h1>
      <table className="usersList">
        <caption>
          <Link to="/userlist/create">
            <button className="create-usersList">Create </button>
          </Link>
        </caption>
        <thead>
          <tr>
            {tableHead.map((item, index) => (
              <th className="userHead" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {inputFields?.map((item, index) => (
              <td key={index}>
                {" "}
                <input type={item} />{" "}
              </td>
            ))}
          </tr>
          {listData?.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item?.roles[0]?.name}</td>
              <td>
                {item?.departments[0]?.name} {item.is_active}
              </td>
              <td>
                <input type="checkbox" checked={item.is_active} readOnly />
              </td>
              <td>{item.is_admin ? "Yes" : "No"}</td>
              <td>
                <img
                  src={deleted}
                  onClick={() => dispatch(userDelete(item.id))}
                ></img>
                <img
                  src={edit}
                  onClick={() => navigate(`Create/${item.id}`)}
                ></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
