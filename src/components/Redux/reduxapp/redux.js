import React from "react";
import "./style.css";
import { useSelector,useDispatch } from "react-redux";
import { incNumber,deccNumber } from "../action";

const Redux = () => {
  const myState = useSelector((state)=>state.changeMyNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1 className="mb">Increment/Decrement Counter</h1>
        <h4 className="mb">using React & redux</h4>
        <div className="sub-container">
          <button className="increment btn" title="Increment" onClick={()=>dispatch(incNumber(5))}>
            <span><i className="fa-solid fa-plus"></i></span>
          </button>
          <span className="input">{myState}</span>
          <button href="" className="decrement btn" title="Decrement" onClick={()=>dispatch(deccNumber(3))}>
            <span><i className="fa-solid fa-minus"></i></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Redux;
