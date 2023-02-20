import React from "react";
import Image from "next/image";
import dark1 from "../public/01-dark.svg";
import dark2 from "../public/02-dark.svg";
function Clients() {
  return (
    <div id="clients">
      <section className="pb-5 pt-2 pt-sm-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
        <div className="container pb-4 mb-2 mb-lg-3">
          <h2 className="h1 text-center">Our clients</h2>
          <p className="text-center mb-0">
            More than 2,000 clients using Around to analyze data
          </p>
        </div>
      </section>
    </div>
  );
}

export default Clients;
