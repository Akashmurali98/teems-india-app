import React, { useEffect, useState } from "react";
import "../../assets/Css/DynamicList.css";
import { useDispatch } from "react-redux";
import { listCreateFLow } from "../../store/WorkFlow/actions";

const DynamicList = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCreateFLow())
      .then((value) => {
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
            <span className="list" key={index}>
              &#916; <br />
              {item.name}
            </span>
          );
        })}
      </div>
    </>
  );
};
export default DynamicList;
