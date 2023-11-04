import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-container">
        {menuData.map((curElm) => {
          const { id, name, category, image, description } = curElm;
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <p className="card-number">{id}</p>
                    <p className="card-category mt-3">{category}</p>
                    <h2 className="card-name">{name}</h2>
                    <p className="card-description mt-3">{description}</p>
                    <p className="card-read  mt-3">Read</p>
                  </div>
                  <img src={image} alt="my images" />
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
