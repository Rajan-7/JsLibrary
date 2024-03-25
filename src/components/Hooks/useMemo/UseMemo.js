import React, { useMemo, useState } from "react";
import styled from "styled-components";

const UseMemo = () => {
    const [myNum,setMyNum]=useState(0);
    const [click,setClick]=useState(false);

    const ActionNum = (num)=>{
        for(let i = 0; i <= 10000000;i++){}
        console.log(num);
        return num;
    }

    const HandleNum = useMemo(()=>{
        return ActionNum(myNum);
    },[myNum])
  return (
    <>
      <Wrapper>
        <div className="container">
          <button className="btn1" onClick={()=>setMyNum(myNum + 1)}>INC</button>
          <p>Number is : {HandleNum}</p>
          <button className="btn2" onClick={()=>setClick(!click)}>{click ? "YOU CLICK ME" : "CLICK ME"}</button>
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
    align-items: center;
    gap: 20px;
  }
  .btn1 {
    height: 40px;
    width: 80px;
    background-color: green;
  }
  p {
    color: #fff;
  }
  .btn2 {
    height: 40px;
    width: 140px;
    background-color: #fff;
  }
`;

export default UseMemo;
