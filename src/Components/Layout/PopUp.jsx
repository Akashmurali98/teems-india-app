import React from "react";
import inputImage from "../../assets/Images/input.png";

import "../../assets/Css/popUp.css";

const Popup = (props) => {
  return (
    <>
      <div className="popUp">
        <header>
          {" "}
          <span className="Head">
           Add Section
           </span>
          <span className="cross" onClick={() => props.handlePop(false)}>
            &#10006;
          </span>
          <hr></hr>
        </header>
        <div className="bodyPopUp">
          <form>
            <input
              type="text"
              placeholder="Section Name"
              name="createfield"
              onChange={(event) => props.handleChange(event.target.value)}
            ></input>
          </form>
        </div>

        <div className="twoSelection"> Two Column Selection</div>
        <img src={inputImage}></img>
        <br></br>
        <button className="pop-btn" onClick={() => props.handleClick()}>
          Create
        </button>
      </div>
    </>
  );
};

export default Popup;
