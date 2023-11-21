import React, { useLayoutEffect, useState } from "react";

import styled from "styled-components";

const UseLayoutEffect = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) {
      setNum(num + Math.random() * 100);
    }
  }, [num]);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="number">
            Your number is <span>{num}</span>{" "}
          </div>
          <div className="btn-main">
            <button className="btn" onClick={() => setNum(0)}>
              Generate Random
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    color: white;
    font-size: 40px;
    padding-right: 30px;
  }
  .btn {
    cursor: pointer;
    color: white;
    background-color: blue;
    font-size: 30px;
  }
  span {
    color: green;
    font-size: 40px;
  }
`;

export default UseLayoutEffect;
