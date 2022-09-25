import React from "react";
import Tile from "./Tile/Tile";
import "./Tiles.css";

const tileData = [
  {
    title: "Animation",
    text: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    logo: "icon-animation.svg",
  },
  {
    title: "Design",
    text: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    logo: "icon-design.svg",
  },
  {
    title: "Photography",
    text: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    logo: "icon-photography.svg",
  },
  {
    title: "Crypto",
    text: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    logo: "icon-crypto.svg",
  },
  {
    title: "Business",
    text: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    logo: "icon-business.svg",
  },
];

const Tiles = () => {
  return (
    <div className="tiles__container">
      <div className="tiles__first-tile">
        <h2>Check out our most popular courses!</h2>
      </div>
      {tileData.map((tile, index) => {
        return (
          <Tile
            title={tile.title}
            text={tile.text}
            logo={tile.logo}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Tiles;
