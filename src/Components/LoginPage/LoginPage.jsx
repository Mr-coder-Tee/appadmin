import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import image from "../../img/logo.png";

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <div className="imgContainder">
        <img
          className="img"
          src="https://images.unsplash.com/photo-1533836506892-a4c329362ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="background img"
        />
      </div>
      <div className="toplayer" />
      <div className="loginform">
        <div className="logoholder">
          <img src={image} alt="logo" className="logo" />
        </div>
        <div className="form">
            
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
