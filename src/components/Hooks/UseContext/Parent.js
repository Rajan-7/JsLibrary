import React from "react";
import "./style.css";
import Child from "./Child";
import {useGlobalData} from "../../context/context"



const Parent = () => {
  const use = useGlobalData();
  const {parentData} = use;  
  
  return (
    <>
      <div className="container">
        <div className="content">
          <p>
            Im parent :( 😎 My name is {parentData.name} & age is {parentData.age}
          </p>
        </div>
        <Child />
      </div>
    </>
  );
};

export default Parent;
