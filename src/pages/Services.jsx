import React from "react";

const Services = () => {
  return (
    <>
      <section id="services" classname>
        <div className="services-area pb-75">
          <div className="container">
            <div
              className="section-title d-flex justify-content-between align-items-center"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={600}
              data-aos-once="true"
            >
              <h2>
                What <span>We Do</span> For You
              </h2>
              <a href="/services/">VIEW ALL SERVICES</a>
            </div>
            <div className="row g-0 justify-content-center">
              <div
                className="col-lg-3 col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={600}
              >
                <div className="services-card">
                  <div className="icon">
                    <i className="flaticon-measuring" />
                  </div>
                  <h3>
                    <a href="/services/service-details/">Architecture</a>
                  </h3>
                  <p>
                    Comfort, decoration, functionality and style merge to
                    achieve a sensory balance directly connected with
                    architectural shapes.
                  </p>
                  <a className="services-btn" href="/services/service-details/">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width={18}
                      height={18}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="arrow-right-84bcc439.svg"
                    />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={600}
              >
                <div className="services-card">
                  <div className="icon">
                    <i className="flaticon-mansory" />
                  </div>
                  <h3>
                    <a href="/services/service-details/">Interior Design</a>
                  </h3>
                  <p>
                    Immerse in a surrounding that befits your lifestyle and
                    shapes your equanimity with comfort & class.
                  </p>
                  <a className="services-btn" href="/services/service-details/">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width={18}
                      height={18}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="../../arrow-right-84bcc439.svg"
                    />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={600}
              >
                <div className="services-card">
                  <div className="icon">
                    <i className="flaticon-interior-design" />
                  </div>
                  <h3>
                    <a href="/services/service-details/">Landscaping</a>
                  </h3>
                  <p>
                    Outdoor spaces are more than just backdrops; they are
                    extensions of the built environment and integral parts of
                    our daily lives.
                  </p>
                  <a className="services-btn" href="/services/service-details/">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width={18}
                      height={18}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="/_next/static/media/arrow-right.84bcc439.svg"
                    />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-duration={600}
              >
                <div className="services-card">
                  <div className="icon">
                    <i className="flaticon-interior-design" />
                  </div>
                  <h3>
                    <a href="/services/service-details/">Sustainable Luxury</a>
                  </h3>
                  <p>
                    We strive to minimise our ecological footprint while
                    maximising the beauty and longevity of our designs.
                  </p>
                  <a className="services-btn" href="/services/service-details/">
                    <img
                      alt="arrow-right"
                      loading="lazy"
                      width={18}
                      height={18}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="../../images/arrow-right-84bcc439.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
