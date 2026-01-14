import React from "react";
export default function Features() {
  return (
    <div>
      <div className="features-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div
                className="features-content"
                data-aos="fade-up">
                <h2>
                  Form &amp; Function: <span>Crafting Exquisite Spaces</span>{" "}
                  with Flair Design
                </h2>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <div className="inner-box">
                      <div className="title">
                        <h3 className="counter">35</h3>
                        <span>
                          YEARS OF <b>EXPERIENCE</b>
                        </span>
                      </div>
                      <div className="wrap">
                        <img
                          alt="experience"
                          loading="lazy"
                          width={161}
                          height={231}
                          decoding="async"
                          data-nimg={1}
                          style={{ color: "transparent" }}
                          src="./images/wrap-6dac2a4f.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="inner-content">
                      <p>
                        We are a leading architecture firm dedicated to creating
                        visionary designs that transcend expectations. With our
                        team of highly skilled architects and designers, we
                        specialize in crafting.
                      </p>
                      <ul className="list">
                        <li>
                          <img
                            alt="arrow"
                            loading="lazy"
                            width={28}
                            height={10}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="../../images/arrow-b1006df4.svg"
                          />
                          Innovative Design Approach
                        </li>
                        <li>
                          <img
                            alt="arrow"
                            loading="lazy"
                            width={28}
                            height={10}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="../../images/arrow-b1006df4.svg"
                          />
                          Highly Skilled Expertise and Specialization
                        </li>
                        <li>
                          <img
                            alt="arrow"
                            loading="lazy"
                            width={28}
                            height={10}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="../../images/arrow-b1006df4.svg"
                          />
                          A client-centric approach
                        </li>
                      </ul>
                      <div className="features-btn">
                        <a className="default-btn" href="/sevices/">
                          Our Core Features
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div
                className="features-image"
                data-aos="fade-up" data-aos-delay="400" style={{ backgroundImage: "url(./images/features1.jpg)" }}
              />
            </div>
          </div>
        </div>
        <div className="features-shape">
          <img
            alt="Architectural Shape"
            loading="lazy"
            width={477}
            height={562}
            decoding="async"
            data-nimg={1}
            style={{ color: "transparent" }}
            src="./images/architectural-shape-fb41ea16.png"
          />
        </div>
      </div>
    </div>
  );
}
