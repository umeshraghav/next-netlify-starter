import React from "react";

export default function About() {
  return (
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div class="container about px-lg-0">
        <div class="row g-0 mx-lg-0">
          <div class="col-lg-6 ps-lg-0" style={{minHeight: "400px"}}>
            <div class="position-relative h-100">
              <img
                class="position-absolute img-fluid w-100 h-100"
                src="img/about.jpg"
                style={{objectFit: "cover"}}
                alt=""
              />
            </div>
          </div>
          <div
            class="col-lg-6 about-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div class="p-lg-5 pe-lg-0">
              <div
                class="bg-primary mb-3"
                style={{width: "60px", height: "2px"}}
              ></div>
              <h1 class="display-5 mb-4">About Us</h1>
              <p class="mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <div class="row g-4 mb-4 pb-3">
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-square bg-white rounded-circle"
                      style={{width: "64px", height: "64px"}}
                    >
                      <img
                        class="img-fluid"
                        src="img/icon/icon-1.png"
                        alt="Icon"
                      />
                    </div>
                    <div class="ms-4">
                      <h2 class="mb-1" data-toggle="counter-up">
                        1234
                      </h2>
                      <p class="fw-medium text-primary mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-square bg-white rounded-circle"
                      style={{width: "64px", height: "64px"}}
                    >
                      <img
                        class="img-fluid"
                        src="img/icon/icon-5.png"
                        alt="Icon"
                      />
                    </div>
                    <div class="ms-4">
                      <h2 class="mb-1" data-toggle="counter-up">
                        1234
                      </h2>
                      <p class="fw-medium text-primary mb-0">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="" class="btn btn-primary rounded-pill py-3 px-5">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
