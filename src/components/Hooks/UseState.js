import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const inti = 7;
    const [myNum,setMyNum] = useState(inti);
  return (
    <>
      <div className="container">
        <div className="button1" onClick={()=>setMyNum(myNum+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <p className="data">{myNum}</p>
        <div className="button1" onClick={()=>myNum > 0 ? setMyNum(myNum-1) : setMyNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
