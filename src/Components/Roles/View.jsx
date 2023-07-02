import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { selectViewData } from "../../store/Role/Reducers";
import "../../Css/View.css";
import { viewRole } from "../../store/Role/actions";

const View = () => {

  const selectedId = useParams();
  const id = selectedId.id;
  const viewData = useSelector(selectViewData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewRole(id));
  }, []);

  return (
    <>
      <button className="update" onClick={() => navigate(-1)}>
        back
      </button>

      <table className="view">
        <tbody>
          <tr>
            <th>Roles</th>
            <td>{viewData?.name}</td>
          </tr>
          <tr>
            <th>Employee Id</th>
            <td>{viewData?.id}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default View;
