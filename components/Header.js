import * as React from "react";

const navItems = [
  "Home",
  "About",
  "Services",
  "Products",
  "Contact",
  "7696269109",
];

export default function Header({ title, window }) {
  return (
    <header className="container-fluid sticky-top bg-body-tertiary">
      <nav className="navbar navbar-expand-lg   ">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            SAPEXIM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse nav justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto  mb-3 mb-lg-0  d-flex ">
              {navItems.map((item) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* <ul className="nav ">
              {navItems.map((item) => {
                return (
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
