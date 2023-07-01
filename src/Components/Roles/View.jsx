import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectViewData } from "../../store/Role/Reducers";
import "../../Css/View.css";

const View = () => {
  const selectedId = useParams();
  const id = selectedId.id;
  const viewData = useSelector(selectViewData);
  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="update" onClick={() => handleback()}>
        back
      </button>

      <table className="view">
        <tbody>
          <tr>
            <th>Roles</th>
            <td>{viewData.name}</td>
          </tr>
          <tr>
            <th>Employee Id</th>
            <td>{viewData.id}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default View;
