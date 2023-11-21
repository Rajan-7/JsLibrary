import React, { useEffect, useState } from "react";
import styled from "styled-components";

const UseEffect1 = () => {
  const [count, setCount] = useState(5);

  const updateNum = (val) => {
    if (val === "incr") return setCount(count + 1);
    if (val === "decr") return setCount(count - 1);
  };

  useEffect(()=>{
    document.title = count;
  },[count])
  return (
    <>
      <Wrapper className="wr">
        <div className="container">
          <button className="btn" onClick={() => updateNum("incr")}>
            +
          </button>
          <h3>{count}</h3>
          <button className="btn" onClick={() => updateNum("decr")}>
            -
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .wr {
    background-color: #000;
  }
  .container {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .btn {
    cursor: pointer;
    color: white;
    height: 40px;
    width: 50px;
  }
  h3 {
    color: #fff;
  }
`;

export default UseEffect1;
