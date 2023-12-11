import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header-image" src="src/assets/Snowman.svg"></img>
      <div className="header-text">
        <div className="header-title">{"Arvin's \nChristmas List"}</div>
        <div className="header-subtitle">
          {"Welcome to the digital christmas whishlist for "}
        </div>
        <div className="header-subtitle">
          {"Arvin Edouard. This sleek website will help you"}
        </div>
        <div className="header-subtitle">
          {" find the perfect gift for Arvin"}
        </div>
      </div>
    </div>
  );
};

export default Header;
