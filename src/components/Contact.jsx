import React from "react";


export default function Contact() {
  return (
<div className="contact-area ptb-100">
  <div className="container">
    <div className="row justify-content-center">
      <div
        className="col-lg-5 col-md-12 pe-5"
        data-aos="fade-up">
        <div className="contact-image">
          <img
            alt="contact"
            loading="lazy"
            width={700}
            height={1012}
            decoding="async"
            data-nimg={1}
            style={{ color: "transparent" }}
            src="./images/contact.png"
          />
        </div>
      </div>
      <div className="col-lg-7 col-md-12 ps-5">
        <div
          className="contact-form-wrap"
          data-aos="fade-up">
          <div className="title">
            <h2>
              <span>Contact,</span> Let's Talk
            </h2>
            <p>
              Let's bring your project to life. Let us know how we can best help
              you. We are a leading architecture firm dedicated to creating
              designs.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <form>
                <div className="form-group">
                  <label>
                    YOUR NAME<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jonathon Ronan"
                    name="name"
                    defaultValue
                  />
                </div>
                <div className="form-group">
                  <label>
                    EMAIL ADDRESS<span>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="jonathonronana63@gmail.com"
                    name="email"
                    defaultValue
                  />
                </div>
                <div className="form-group">
                  <label>
                    PHONE NO<span>*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+0 321 546 2345"
                    name="phone"
                    defaultValue
                  />
                </div>
                <div className="form-group">
                  <label>
                    YOUR MESSAGE HERE<span>*</span>
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Write your message here..."
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="default-btn">
                  Send Message Now
                </button>
              </form>
            </div>
            <div className="col-lg-5 col-md-6">
              <ul className="contact-info-list">
                <li>
                  <span>ADDRESS</span>B 6/4 Vasant Vihar 
                  New Delhi
                </li>
                <li>
                  <span>CONTACT</span>
                  <a href="mailto:info@studiolasani.com">info@studiolasani.com</a>
                  <a href="tel:9810330704">+91-9810330704</a>
                </li>
                <li>
                  <span>SOCIAL MEDIA</span>
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="ri-facebook-line" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="ri-instagram-line" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                        <i className="ri-twitter-line" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-shape1">
    <img
      alt="shape"
      loading="lazy"
      width={116}
      height={82}
      decoding="async"
      data-nimg={1}
      style={{ color: "transparent" }}
      src="../../images/shape-d69a8b78.png"
    />
  </div>
</div>
  );
}