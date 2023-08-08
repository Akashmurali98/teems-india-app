import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { listWorkFLow } from "../../store/WorkFlow/actions";
import { useNavigate } from "react-router-dom";

import "../../assets/Css/DynamicList.css";

const DynamicList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listWorkFLow())
      .then((value) => {
        console.log(value);
        setData(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="listParent">
        {data.map((item, index) => {
          return (
            <span
              className="list"
              key={index}
              onClick={() => navigate(`/workFlow/edit/${item.id}`)}
            >
              &#916; <br />
              {item.name}
              <br />
              Active :<input type="checkbox" checked={item.is_active} />
              <br />
              Publish :<input type="checkbox" checked={item.is_published} />
            </span>
          );
        })}
      </div>
    </>
  );
};
export default DynamicList;
