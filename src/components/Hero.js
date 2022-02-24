import React from "react";
import heroImage from "../images/hero.jpg";

const Hero = () => {
  return (
    <section className="section hero_section">
      <div className="hero_text">
        <h1>Продюссерская компания ArtRusVek</h1>
      </div>
      <img src={heroImage} alt="Отрывок из спектакля" />
    </section>
  );
};

export default Hero;
