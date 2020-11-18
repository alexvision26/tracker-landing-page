import React from "react";
import Main from "../Elements/Main.svg";

function HeroBanner() {
  return (
    <>
      <div className="hero-container">
        <h1 className="intro-info">Control center for your job hunt</h1>
        <img className="banner-img" src={Main} alt="Main image" />
      </div>
    </>
  );
}

export default HeroBanner;
