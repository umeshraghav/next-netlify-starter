import * as React from "react";
import Script from "next/script";
const navItems = ["Home", "About", "Services", "Products", "Contact"];

export default function Header({ title, window }) {
  const [isMobile, setIsMobile] = React.useState(false);
  function handleClick() {
    console.log("Hello");
  }
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h4 className="logo">
              SAP <span>EXIM</span>
            </h4>
            <button
              type="button"
              className="nav-toggle"
              onClick={() => setIsMobile(!isMobile)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={isMobile ? "links show-links" : "links"}>
            {navItems.map((item) => {
              return (
                <li className="nav-item" style={{ gap: "30px" }} key={item}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              );
            })}
            {/* <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li> */}
          </ul>
          <a href="tel:+919310234436" className="links phone">
            93102 34436
          </a>
        </div>
      </nav>
    </>
  );
}
