import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";
import { viewdept } from "../../store/Department/action";
import { selectViewData } from "../../store/Department/Reducers";

const ViewDept = () => {
  const selectedId = useParams();
  const id = selectedId.id;
  const dispatch = useDispatch();
  const viewData = useSelector(selectViewData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(viewdept(id));
  }, []);

  const handleback = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="update" onClick={handleback}>
        back
      </button>
      <table>
        <tr>
          <th>Roles</th>
          <td>{viewData.name}</td>
        </tr>
        <tr>
          <th>Employee Id</th>
          <td>{viewData.id}</td>
        </tr>
      </table>
    </>
  );
};

export default ViewDept;
