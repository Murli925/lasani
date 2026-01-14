import React from "react";

function Navbar() {
  return (
    <section id="navigation">
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid position-relative">
          <a className="navbar-brand" href="/portfolio/">
            <img
              alt="Lasani Logo"
              loading="lazy"
              width={180}
              decoding="async"
              data-nimg={1}
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
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="/portfolio/">
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="nav-link active" href="/portfolio/">
                      Architecture Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/interior-home/">
                      Interior Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/architecture-studio/">
                      Architecture Studio
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/about-us/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="/portfolio/">
                  Portfolio
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="nav-link " href="/portfolio/">
                      Portfolio Style 01
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/portfolio-2/">
                      Portfolio Style 02
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="/portfolio/portfolio-details/"
                    >
                      Portfolio Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="/portfolio/">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="/portfolio/">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link " href="/services/">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="/services/service-details/"
                        >
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/pricing/">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/team/">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/gallery/">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/faq/">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/testimonials/">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="/portfolio/">
                      My Account
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link " href="/login/">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="/register/">
                          Register
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/terms-conditions/">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/request-quote/">
                      Request A Quote
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/portfolio/">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="nav-link " href="/blog/">
                      Blog Grid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/blog-right-sidebar/">
                      Right Sidebar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/blog-left-sidebar/">
                      Left Sidebar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/single-blog/">
                      Single Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="/portfolio/">
                      Others
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link " href="/author/">
                          Author
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="/categories/">
                          Categories
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link " href="/tags/">
                          Tags
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/contact-us/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="others-option d-flex align-items-center">
            <div className="option-item">
              <div className="search-btn">
                <i className="ri-search-line" />
              </div>
            </div>
            <div className="option-item">
              <a className="default-btn" href="/request-quote/">
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
