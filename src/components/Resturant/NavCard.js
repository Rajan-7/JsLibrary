import React from "react";

const NavCard = ({ filterItem, uniqueList }) => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-body">
          <div className="nav-items">
            {uniqueList.map((curElm) => {
              return (
                <button className="btn" onClick={() => filterItem(curElm)}>
                  {curElm}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavCard;
