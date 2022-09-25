import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__content-container">
        <h1>Maximize skill, minimize budget</h1>
        <p className="pgraph-main">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button>Get Started</button>
      </div>
      <div className="hero__image-container">
        <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/image-hero-desktop@2x.png`}
            media="(min-width: 1400px)"
          />
          <source
            srcSet={`${process.env.PUBLIC_URL}/image-hero-tablet@2x.png`}
            media="(min-width: 768px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image-hero-mobile@2x.png`}
            alt="hero-logo"
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
