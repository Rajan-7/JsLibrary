import React, { useReducer } from "react";
import styled from "styled-components";
import reducer from "./reducer";

const iniValue = 0;

const UseReducer1 = () => {
  const [count, dispatch] = useReducer(reducer, iniValue);

  return (
    <>
      <Wrapper className="wr">
        <div className="container">
          <div className="title">
            <h2>Using UseReducer Hooks</h2>
          </div>
          <div className="values">
            <button className="btn" onClick={() => dispatch({ type: "INC" })}>
              +
            </button>
            <h3>{count}</h3>
            <button className="btn" onClick={() => dispatch({ type: "DEC" })}>
              -
            </button>
          </div>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .values {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .btn {
    cursor: pointer;
    height: 40px;
    width: 50px;
    font-size: 30px;
    color: white;
  }
  h3 {
    font-size: 30px;
    color: #fff;
  }
  .title {
    color: green;
  }
`;

export default UseReducer1;
