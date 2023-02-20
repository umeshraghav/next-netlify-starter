import React from "react";
import heroImage from "../../public/hero.jpg";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src={heroImage}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              See everything, miss nothing - with our CCTV cameras
            </h1>
            <p className="lead">
              leading supplier and service provider of top branded CCTV cameras
              with installation and maintenance for CCTV systems, fire,
              surveillance and security related services
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
