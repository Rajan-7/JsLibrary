import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./MenuApi";
import NavCard from "./NavCard";

const uniqueMenu = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueMenu);

const Resturant = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueMenu);

  const filterItem = (categori) => {
    if (categori === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === categori;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <NavCard filterItem={filterItem} uniqueList={menuList} />
      <MenuCard menuData={MenuData} />
    </>
  );
};

export default Resturant;
