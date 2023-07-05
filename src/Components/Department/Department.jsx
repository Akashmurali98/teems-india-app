import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect } from "react";

import view from "../../assets/Images/visibility.png";
import deleted from "../../assets/Images/delete.png";
import {
  deletedept as deleteDept,
  listdept as listDept,
} from "../../store/Department/action";
import { selectFormData } from "../../store/Department/Reducers";
import "../../Css/DeptList.css";

const DepartmentList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listData = useSelector(selectFormData);

  useEffect(() => {
    dispatch(listDept());
  }, []);

  return (
    <>
      <h2>Department List</h2>
      <Link to="/departmentlist/createdept">
        <button className="createDept-btn">Create</button>
      </Link>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Id</th>
          <th>Actions</th>
        </thead>
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
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>
                <img
                  src={view}
                  onClick={() => navigate(`viewdept/${item.id}`)}
                ></img>
                <img
                  src={deleted}
                  onClick={() => dispatch(deleteDept(item.id))}
                ></img>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default DepartmentList;
