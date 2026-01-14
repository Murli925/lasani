import React from "react";

function Navbar() {
  return (
    <section id="navigation">
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid position-relative">
          <a className="navbar-brand" href="/">
            <img
              alt="Lasani Logo"
              loading="lazy"
              width={250}
              decoding="async"
              style={{ color: "transparent" }}
              src="images/lasani-logo-white.png"
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar" />
            <span className="icon-bar middle-bar" />
            <span className="icon-bar bottom-bar" />
          </button>
          <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/career">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="others-option d-flex align-items-center">
            <div className="option-item">
              <a className="default-btn" href="/request-quote">
                Request A Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
