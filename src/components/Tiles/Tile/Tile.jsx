import React from "react";
import "./Tile.css";

const Tile = ({ title, text, logo }) => {
  return (
    <div className="tile__container">
      <img src={`${process.env.PUBLIC_URL}/${logo}`} alt={`${title}-logo`} />
      <p className="tile__title">{title}</p>
      <p className="pgraph-main">{text}</p>
      <a href="#">Get Started</a>
    </div>
  );
};

export default Tile;
