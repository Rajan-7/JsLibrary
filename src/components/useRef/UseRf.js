import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const UseRf = () => {
  const [userInput, setUserInput] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <Wrapper>
        <div className="container">
          <input
            type="text"
            className="input-class"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="values">The number of render is <span className="span">{count.current}</span></div>
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
    color:white;
    gap: 15px;
  }
  .input-class {
    border: 1px solid black;
    height: 30px;
    outline:none;
    padding-left:5px;
    color:#fff;
  }
  .span{
    color:green;
  }
  
`;

export default UseRf;
