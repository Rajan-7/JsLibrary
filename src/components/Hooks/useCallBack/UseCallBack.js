import React, { useCallback, useState } from "react";
import List from "./List";
import styled from "styled-components";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addList =useCallback( () => {
    return setList((prev) => [...prev, "My List"]);
  },[]);

  return (
    <>
      <Wrapper>
        <div className="container">
          <List list={list} addList={addList} />
          <p className="para">Count : {count}</p>
          <button className="btn" onClick={increment}>
            INC
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    gap: 20px;
  }
  p {
    font-sixe: 20px;
    color: #fff;
  }
  .btn {
    height: 40px;
    width: 80px;
    color: #fff;
  }
`;

export default UseCallBack;
