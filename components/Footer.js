//import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className="pt-3 mt-4 text-muted border-top">
        <div className="container pt-3 mt-md-2 mt-lg-3">
          <div className="row gy-md-5 gy-4 mb-md-5 mb-4 pb-lg-2">
            <div className="col-lg-3">
              <a
                className="navbar-brand d-inline-flex align-items-center mb-lg-4 mb-3"
                href="index.html"
              >
                <span className="text-primary flex-shrink-0 me-2">
                  <svg
                    version="1.1"
                    width="35"
                    height="32"
                    viewBox="0 0 36 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                    ></path>
                  </svg>
                </span>
                <span className="text-nav">SAP EXIM</span>
              </a>
              <p
                className="mb-4 pb-lg-1 fs-xs text-muted"
                style={{ maxWidth: "306px" }}
              >
                The agency with extensive experience that creates marketing
                strategies for B2B and B2C companies.
              </p>
              <div className="mt-n3 ms-n3">
                <a
                  className="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3"
                  href="#"
                >
                  <i className="ai-instagram"></i>
                </a>
                <a
                  className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3"
                  href="#"
                >
                  <i className="ai-facebook"></i>
                </a>
                <a
                  className="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle mt-3 ms-3"
                  href="#"
                >
                  <i className="ai-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-8 offset-xl-1 col-lg-9">
              <div className="row row-cols-sm-4 row-cols-1">
                <div className="col">
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Services
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Industries
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Clients
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Reviews
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Case studies
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Contacts
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Help center
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Careers
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        News &amp; insights
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="#">
                        Industry forecasts
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column mb-0">
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="mailto:+15262200444">
                        + 1 526 220 0444
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="mailto:+15262200444">
                        + 1 526 220 0000
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="text-primary fw-semibold p-0" href="#">
                        example@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="fs-sm text-muted">
            &copy; All rights reserved. Made by{" "}
            <a
              href="https://createx.studio/"
              target="_blank"
              rel="noopener"
              className="text-dark text-decoration-none opacity-90"
            >
              Createx Studio
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
