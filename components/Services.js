import React from "react";

function Services() {
  return (
    <div>
      <section className="section services" id="services">
        <div className="title-wrapper">
          <h2 className="title">
            our <span className="subtitle">services</span>
          </h2>
        </div>

        <div className="section-center services-center">
          <article className="service">
            <span className="service-icon">
              <i class="fas fa-fire-alt"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Fire Detection System</h4>
              <p className="service-text">
                conventional, semi-addressable, addressable systems
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i class="fas fa-file-medical"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Nurse Call System</h4>
              <p className="service-text">
                We are pioneers in Nurse Call Systems and recognized as leading
                installer in India.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i class="fas fa-alarm-clock"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Security Alarm System</h4>
              <p className="service-text">
                Burglar alarm, IP Video door Phone Systems, Baggage scanner
              </p>
            </div>
          </article>
        </div>
        {/* Service Section two */}
        <div className="section-center services-center">
          <article className="service">
            <span className="service-icon">
              <i class="fas fa-cctv"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Surveillance System</h4>
              <p className="service-text">
                CCTV, Under Vehicle Surveillance System
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i class="fas fa-universal-access"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Access Control System</h4>
              <p className="service-text">
                Stand alone, Multi-door systems, Turnstiles, Boom Barrier system
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i class="fas fa-bolt"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Electrical</h4>
              <p className="service-text">
                Cable, wire, switch, socket, fan etc.
              </p>
            </div>
          </article>
        </div>
        {/* section 3 */}
        <div className="section-center services-center">
          <article className="service">
            <span className="service-icon">
              <i class="fas fa-wand-magic"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Lighting Automation</h4>
              <p className="service-text">Smart home solution</p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i class="fas fa-network-wired"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Networking</h4>
              <p className="service-text">Active, Passive</p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon">
              <i class="fas fa-users"></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">Consultancy</h4>
              <p className="service-text">LV Services</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Services;
