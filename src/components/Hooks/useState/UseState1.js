import React, { useState } from "react";
import styled from "styled-components";

const UseState = () => {
  const [count, setCount] = useState(5);
  return (
    <>
      <Wrapper className="wr">
        <div className="container">
          <button className="btn" onClick={() => setCount(count + 2)}>
            +
          </button>
          <h3>{count}</h3>
          <button className="btn" onClick={() => setCount(count - 1)}>
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
    background-color: #000;
  }
  .btn {
    cursor: pointer;
  }
  h3 {
    color: #fff;
  }
`;

export default UseState;
