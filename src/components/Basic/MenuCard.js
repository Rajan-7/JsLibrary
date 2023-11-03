import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-container">
        {menuData.map((curElm) => {
          return (
            <>
              <div className="card-container" key={curElm.id}>
                <div className="card">
                  <div className="card-body">
                    <p className="card-number">{curElm.id}</p>
                    <p className="card-category mt-3">{curElm.category}</p>
                    <h2 className="card-name">{curElm.name}</h2>
                    <p className="card-description mt-3">
                      {curElm.description}
                    </p>
                    <p className="card-read  mt-3">Read</p>
                  </div>
                  <img src={curElm.image} alt="my images" />
                  <span className="card-order mt-3">
                    <span className="border">Order Now</span>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
