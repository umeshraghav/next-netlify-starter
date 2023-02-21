import React from "react";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-banner">
          <h1 className="hero-title">continue exploring</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href="#featured" className="btn btn-white scroll-link">
            explore tours
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
