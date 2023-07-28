import React from "react";
import inputImage from "../../assets/Images/input.png";

import "../../assets/Css/popUp.css";

const Popup = (props) => {
  return (
    <>
      <div className="popUp">
        <header>
          {" "}
          ** Add Section
          <span className="cross" onClick={props.handlePop}>
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
              onChange={props.handleChange}
            ></input>
            <button>Create</button>
          </form>
        </div>

        <div className="twoSelection">
          <u> ** Two Column Selection</u>
        </div>
        <img src={inputImage}></img>
        <br></br>
      </div>
    </>
  );
};

export default Popup;
