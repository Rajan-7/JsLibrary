import React, { useState } from "react";
import styled from "styled-components";

const UseStateRealUse = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev)=>{
      return {...prev,[name]:value};
    })
  };

  return (
    <>
      <Wrapper>
        <form className="form">
          <div className="container">
            <div className="title">Register</div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                className="controller"
                name="username"
                placeholder="Username"
                autoComplete="off"
                value={formData.username}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                className="controller"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="controller"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password-confirm"
                className="controller"
                name="password_confirm"
                placeholder="Confirm password"
                value={formData.password_confirm}
                onChange={handleInput}
              />
            </div>
            <div className="btn">
              <button type="submit" className="btn-cls">
                Submit
              </button>
            </div>
            <p>{`My name is ${formData.username} & email is ${formData.email}`}</p>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .form {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#fff;
    ${'' /* background-color:hsl(0,0%,94%); */}
  }

  .container {
    height: 300px;
    width: 300px;
    margin-top: -150px;
    border: 1px solid blue;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding:20px;

  }

  .title {
    color: #0766AD;
  }

  .form-group {
    margin-top: 5px;
    height: 25px;
    width:200px;
    border-radius:0px;
    background-color:grey;
    border:1px solid black;

    &:hover{
      background-color:#fff;
    }
  }

  .controller {
    text-align: left;
    width:195px;
    background-color:grey;
    outline:none;
    border:none;

    &:hover{
      background-color:#fff;
    }
  }

  ::placeholder{
    color:#9ADE7B;
  }

  .btn {
    margin-top: 10px;
    background-color:pink;
  }

  .btn-cls {
    cursor: pointer;
    background-color:#FF8F8F;
  }

  p{
    padding:5px;
    text-align:left;
  }
`;

export default UseStateRealUse;
