import React from "react";
import "./style.css";

const Redux = () => {
  return (
    <>
      <div className="container">
        <h1 className="mb">Increment/Decrement Counter</h1>
        <h4 className="mb">using React & redux</h4>
        <div className="sub-container">
          <button className="increment btn" title="INCREMENT">
            <span><i class="fa-solid fa-plus"></i></span>
          </button>
          <input type="text" name="quantity" className="input" value="0" />
          <button href="" className="decrement btn" title="DECREMENT">
            <span><i class="fa-solid fa-minus"></i></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Redux;
