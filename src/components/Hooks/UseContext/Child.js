import React from "react";
import { useGlobalData } from "../../context/context";

const Child = () => {
  const user = useGlobalData();
  const { userData } = user;
  console.log(userData);
  return (
    <>
      <div className="content">
        <p>
          Im child : ) ✌️ Name is {userData.name} & age is {userData.age}
        </p>
      </div>
    </>
  );
};

export default Child;
