import React from "react";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-banner">
          <h1 className="hero-title">
            Securing your world, <br />
            one view at a time.
          </h1>
          <p className="hero-text">
            We’re your solution provider in CCTV, Access control, Fire detection
            and suppression, Public address system, EPABX . Our expertise in
            tailor-made Integrated Building Systems creates a robust offering to
            clients.
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
