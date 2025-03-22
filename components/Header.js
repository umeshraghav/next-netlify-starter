import * as React from "react";

export default function Header() {
  return (
    <>
      <div>
        {/* <div class="container-fluid bg-dark px-5">
          <div class="row gx-4 d-none d-lg-flex">
            <div class="col-lg-6 text-start">
              <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                <div class="btn-sm-square rounded-circle bg-primary me-2">
                  <small class="fa fa-map-marker-alt text-white"></small>
                </div>
                <small>123 Street, New York, USA</small>
              </div>
              <div class="h-100 d-inline-flex align-items-center py-3">
                <div class="btn-sm-square rounded-circle bg-primary me-2">
                  <small class="fa fa-envelope-open text-white"></small>
                </div>
                <small>info@sapexim.com</small>
              </div>
            </div>
            <div class="col-lg-6 text-end">
              <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                <div class="btn-sm-square rounded-circle bg-primary me-2">
                  <small class="fa fa-phone-alt text-white"></small>
                </div>
                <small>+012 345 6789</small>
              </div>
              <div class="h-100 d-inline-flex align-items-center py-3">
                <div class="btn-sm-square rounded-circle bg-primary me-2">
                  <small class="far fa-clock text-white"></small>
                </div>
                <small>Mon - Fri : 9AM - 9PM</small>
              </div>
            </div>
          </div>
        </div> */}

        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
          <a href="index.html" class="navbar-brand d-flex align-items-center">
            <h2 class="m-0 text-primary">SAPEXIM</h2>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-4 py-lg-0">
              <a href="index.html" class="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" class="nav-item nav-link">
                About
              </a>
              <a href="service.html" class="nav-item nav-link">
                Service
              </a>
              <a href="project.html" class="nav-item nav-link">
                Project
              </a>
              
              <a href="contact.html" class="nav-item nav-link">
                Contact
              </a>
            </div>
            <div class="h-100 d-lg-inline-flex align-items-center d-none">
              <a
                class="btn btn-square rounded-circle bg-light text-primary me-2"
                href=""
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="btn btn-square rounded-circle bg-light text-primary me-2"
                href=""
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="btn btn-square rounded-circle bg-light text-primary me-2"
                href=""
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                class="btn btn-square rounded-circle bg-light text-primary me-0"
                href=""
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
