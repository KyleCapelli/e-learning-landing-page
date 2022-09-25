import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__content-container">
        <img src={`${process.env.PUBLIC_URL}/logo-dark.svg`} alt="logo-dark" />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
