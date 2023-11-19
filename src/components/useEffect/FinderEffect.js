import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FinderEffect = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const widthResizer = () => {
    setWidthCount(() => {
      return window.innerWidth;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", widthResizer);
    return () => {
      window.removeEventListener("resize", widthResizer);
    };
  });
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="title">
            <h2>
              The width of your PC/Laptop is <span className="col">{widthCount}</span>
            </h2>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    color: white;
  }
  .col{
    color:green;
  }
`;

export default FinderEffect;
