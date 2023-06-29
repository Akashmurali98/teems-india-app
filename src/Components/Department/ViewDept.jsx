import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { viewdept } from "../../store/Department/action";
import { selectViewData } from "../../store/Department/Reducers";

const ViewDept = () => {
  const [selected, setSelected] = useState([]);
  const selectedId = useParams();
  const id = selectedId.id;
  const dispatch = useDispatch();
  const viewData = useSelector(selectViewData);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(viewdept(id));
  }, []);

  const handleback = () => {
    navigate(-1);
  }
  return (
    <>
    <button className="update" onClick={handleback}>back</button>
      <table>
        {/* <tbody> */}
        <tr>
          <th>Roles</th>
          <td>{viewData.name}</td>
        </tr>
        <tr>
          <th>Employee Id</th>
          <td>{viewData.id}</td>
        </tr>
        {/* </tbody> */}
      </table>
    </>
  );
};

export default ViewDept;
