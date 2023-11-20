import React, { useRef } from "react";
import styled from "styled-components";

const UseDom = () => {
  const inputRef = useRef();

  const handleBackground = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  };
  return (
    <>
      <Wrapper>
        <div className="container">
          <input type="text" ref={inputRef}/>
          <div className="values">
            <button className="btn" onClick={handleBackground}>
              Submit
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
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
    color: white;
    gap: 15px;
  }
  input {
    border: 1px solid black;
    height: 30px;
    outline: none;
    padding-left: 5px;
    color: black;
  }
  .btn {
    height: 30px;
    width: 80px;
    background-color: #0766ad;
    cursor: pointer;
  }
`;

export default UseDom;
