import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";

const Resturant = () => {
  const [MenuData,setMenuData] = useState(Menu);

  return (
    <>
      <MenuCard menuData={MenuData} />
    </>
  );
};

export default Resturant;
