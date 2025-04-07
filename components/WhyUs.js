import React from "react";

export default function WhyUs() {
  return (
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div class="container feature px-lg-0">
        <div class="row g-0 mx-lg-0">
          <div
            class="col-lg-6 feature-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div class="p-lg-5 ps-lg-0">
              <div
                class="bg-primary mb-3"
                style={{ width: "60px", height: "2px" }}
              ></div>
              <h1 class="display-5 mb-5">Why Choose Us</h1>
              <p class="mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <div class="row g-4">
                <div class="col-6">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-square bg-white rounded-circle"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <img
                        class="img-fluid"
                        src="img/icon/icon-7.png"
                        alt="Icon"
                      />
                    </div>
                    <div class="ms-4">
                      <p class="text-primary mb-2">Trusted</p>
                      <h5 class="mb-0">Security</h5>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-square bg-white rounded-circle"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <img
                        class="img-fluid"
                        src="img/icon/icon-10.png"
                        alt="Icon"
                      />
                    </div>
                    <div class="ms-4">
                      <p class="text-primary mb-2">Quality</p>
                      <h5 class="mb-0">Services</h5>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-square bg-white rounded-circle"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <img
                        class="img-fluid"
                        src="img/icon/icon-3.png"
                        alt="Icon"
                      />
                    </div>
                    <div class="ms-4">
                      <p class="text-primary mb-2">Smart</p>
                      <h5 class="mb-0">Systems</h5>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center">
                    <div
                      class="btn-square bg-white rounded-circle"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <img
                        class="img-fluid"
                        src="img/icon/icon-2.png"
                        alt="Icon"
                      />
                    </div>
                    <div class="ms-4">
                      <p class="text-primary mb-2">24/7 Hours</p>
                      <h5 class="mb-0">Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
            <div class="position-relative h-100">
              <img
                class="position-absolute img-fluid w-100 h-100"
                src="img/feature.jpg"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
