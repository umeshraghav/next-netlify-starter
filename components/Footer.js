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
                href="/"
              >
                <span className="text-primary flex-shrink-0 me-2"></span>
                <span className="text-nav">SAP EXIM</span>
              </a>
              <p
                className="mb-4 pb-lg-1 fs-xs text-muted"
                style={{ maxWidth: "306px" }}
              >
                A Pioneer in providing fire, surveillance and security related
                services
              </p>
              {/* <div className="mt-n3 ms-n3">
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
              </div> */}
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
                    <li className="nav-item mb-2">Address</li>
                    <li className="nav-item mb-2">
                      Sector 3 Faridabad Haryana
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column mb-0">
                    {/* <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="mailto:+15262200444">
                        + 1 526 220 0444
                      </a>
                    </li> */}
                    <li className="nav-item mb-2">
                      <a className="nav-link p-0" href="mailto:+919310234436">
                        + 91 93102 34436
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a className="text-primary fw-semibold p-0" href="#">
                        info@sapexim.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="fs-sm text-muted">&copy; All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
