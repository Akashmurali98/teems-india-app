import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/Css/DepartmentList.css";
import view from "../../assets/Images/visibility.png";
import edit from "../../assets/Images/create.png";
import deleted from "../../assets/Images/delete.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletedept, listdept } from "../../store/Department/action";
import { selectFormData } from "../../store/Department/Reducers";
// import listDe

const DepartmentList = () => {
  const [data, setData] = useState([]);
  const id = useParams;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listData = useSelector(selectFormData);
  // console.log(listData)
  useEffect(() => {
    dispatch(listdept());
  }, []);

  const handleDelete = (selectedId) => {
    dispatch(deletedept(selectedId));
  };

  const handleView = (selectedId) => {
    // dispatch(viewdept(selectedId));
    // const id = selectedId;
    navigate(`viewDept/${selectedId}`);
  };

  return (
    <>
      <h2>Department List</h2>
      <Link to="/departmentList/createDept">
        <button className="createDept-btn">Create Department</button>
      </Link>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Id</th>
          <th>Actions</th>
        </thead>
        {listData.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>

              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>
                <img src={view} onClick={() => handleView(item.id)}></img>
                <img src={deleted} onClick={() => handleDelete(item.id)}></img>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default DepartmentList;
