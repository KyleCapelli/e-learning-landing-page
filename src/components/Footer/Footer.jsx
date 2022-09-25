import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content-container">
        <img src={`${process.env.PUBLIC_URL}/logo-light.svg`} alt="logo-dark" />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Footer;
