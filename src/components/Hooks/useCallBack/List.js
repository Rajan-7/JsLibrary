import React,{memo} from "react";

const List = ({ list, addList }) => {
    console.log("child render");
  return (
    <>
      <h2>My list</h2>
      {list.map((elem, index) => {
        return <p key={index}>{elem + " " + index}</p>;
      })}
      <button onClick={addList} style={{height:40,width:80,color:"white",fontSize:16}}>Add List</button>
    </>
  );
};

export default memo(List);
