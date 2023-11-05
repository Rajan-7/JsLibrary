import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const inti = 7;
  // const [myNum,setMyNum] = useState(inti);
  const [state, dispatch] = useReducer(reducer, inti);
  return (
    <>
      <div className="container">
        <div className="button1" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <p className="data">{state}</p>
        {/* <div className="button1" onClick={()=>myNum > 0 ? setMyNum(myNum-1) : setMyNum(0)}> */}
        <div className="button1" onClick={() => dispatch({ type: "DECR" })}>
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

export default UseReducer;
