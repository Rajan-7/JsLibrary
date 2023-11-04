import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const inti = 0;
  const [myNum, setMyNum] = useState(inti);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="container1">
        <p className="data">{myNum}</p>
        <div className="button1" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
