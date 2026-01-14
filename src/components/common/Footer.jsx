import React from "react";


export default function Footer() {
  return (
    <div>
    <footer className="footer-area pt-100 pb-75">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="single-footer-widget">
              <div className="widget-logo">
                <a href="/">
                  <img
                    alt="site logo"
                    loading="lazy"
                    width={154}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="images/lasani-logo-white.png"
                  />
                </a>
              </div>
              <p>
              Studio Lasani is a company where innovation meets sustainability in the world of architectural design. Our team is committed to creating extraordinary spaces that inspire & enrich.
              </p>
            </div>
          </div>
          <div
            className="col-lg-2 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="single-footer-widget ps-5">
              <h3>FOLLOW US</h3>
              <ul className="social-link">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-arrow-right-line" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-arrow-right-line" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-arrow-right-line" /> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-arrow-right-line" /> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="single-footer-widget ps-5">
              <h3>SITE MAP</h3>
              <ul className="quick-link">
                <li>
                  <a href="/portfolio">Projects</a>
                </li>
                <li>
                  <a href="/blog">News And Articles</a>
                </li>
                <li>
                  <a href="/request-quote">Request a Quote</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="single-footer-widget">
              <h3>SUBSCRIBE NEWSLETTER</h3>
              <form className="newsletter-form">
                <input
                  type="text"
                  className="input-newsletter"
                  placeholder="Your Email Here"
                />
                <button type="submit">
                  <i className="ri-arrow-right-line" />
                  SUBSCRIBE NEWSLETTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
          <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>Copyright © 2024 Studio Lasani, All Rights Reserved | 
                <a href="https://www.adaan.com" target="_blank" rel="noreferrer"> Powered by Adaan Digital Solutions</a>
              </p>
            </div>
          </div>
        </div>

        <div style={{display: 'block'}} id="back-to-top" className="position-fixed text-center border-0 p-0"><i className="ri-arrow-up-s-line" /></div>

        </div>
  );
}