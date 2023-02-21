import React from "react";

function Stats() {
  return (
    <div>
      <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xl-3 mb-xxl-5">
        <div className="bg-light rounded-5 py-4 py-md-5 px-lg-5">
          <h2 className="h1 text-center">Our Achievements</h2>
          <p className="text-center pb-4 stat-text mb-2 mb-lg-3">
            We provide a wide range of consulting services
          </p>
          <div className="row row-cols-2 row-cols-md-3 g-0">
            <div className="col d-md-flex justify-content-center text-center text-md-start position-relative">
              <div
                className="position-absolute top-50 end-0 translate-middle-y border-end"
                style={{ height: "60px" }}
              ></div>
              <div className="p-3 px-sm-0 py-sm-4">
                <div className="h2 display-5 stat-text mb-0">100+</div>
                <span>Happy clients</span>
              </div>
            </div>
            <div className="col d-md-flex justify-content-center text-center text-md-start position-relative">
              <div
                className="position-absolute top-50 end-0 translate-middle-y border-end d-none d-md-block"
                style={{ height: "60px" }}
              ></div>
              <div className="p-3 px-sm-0 py-sm-4">
                <div className="h2 display-5 stat-text mb-0">150+</div>
                <span>Projects completed</span>
              </div>
            </div>
            <div className="col d-md-flex justify-content-center text-center text-md-start position-relative">
              <div
                className="position-absolute top-50 end-0 translate-middle-y border-end"
                style={{ height: "60px" }}
              ></div>
              <div className="p-3 px-sm-0 py-sm-4">
                <div className="h2 display-5 stat-text mb-0">30+</div>
                <span>Full time specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
