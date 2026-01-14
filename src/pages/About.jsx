import React from "react";
import Breadcrumb from '../components/shared/Breadcrumb';
import Contact from "../components/Contact";

const About = () => {
  return (
    <>
      <Breadcrumb />

      <div className="about-area pt-100">
        <div className="container">
          <div className="about-three-title">
            <span>ABOUT US</span>
            <h2>
              We Are <b>Lasani.</b> We Create Unique And Sustainable Living
              Spaces, Designed For Sharing
            </h2>
          </div>
          <div className="about-image-three">
            <img
              alt="about"
              loading="lazy"
              width={1320}
              height={430}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="./images/inner-banner.jpg"
            />
          </div>
          <div className="about-three-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-three-left-content">
                  <p className="mb-0">
                    We are leading architecture firm dedicated to creating
                    visionary designs that transcend expectations. With our team
                    of highly skilled architects and designers, we specialize in
                    crafting.
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
                        src="/_next/static/media/arrow2.4c995f66.svg"
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
                        src="/_next/static/media/arrow2.4c995f66.svg"
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
                        src="/_next/static/media/arrow2.4c995f66.svg"
                      />{" "}
                      A client-centric approach for an architectural company
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
                        src="/_next/static/media/arrow2.4c995f66.svg"
                      />
                      Sustainable Design Practices
                    </li>
                  </ul>
                  <div className="about-image-wrap">
                    <img
                      alt="image"
                      loading="lazy"
                      width={1052}
                      height={1120}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src="/_next/static/media/about4.a4e81ec3.png"
                    />
                    <div className="wrap-video">
                      <img
                        alt="image"
                        loading="lazy"
                        width={184}
                        height={184}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src="/_next/static/media/wrap.0aa7ad87.png"
                      />
                      <div className="video-btn text-decoration-none">
                        <i className="ri-play-fill" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-three-right-content">
                  <div
                    data-accordion-component="Accordion"
                    className="our-mission-and-vision-accordion"
                  >
                    <div
                      data-accordion-component="AccordionItem"
                      className="accordion__item"
                    >
                      <div
                        data-accordion-component="AccordionItemHeading"
                        role="heading"
                        className="accordion__heading"
                        aria-level={3}
                      >
                        <div
                          className="accordion__button"
                          id="accordion__heading-a"
                          aria-disabled="true"
                          aria-expanded="true"
                          aria-controls="accordion__panel-a"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          Our Mission
                        </div>
                      </div>
                      <div
                        data-accordion-component="AccordionItemPanel"
                        className="accordion__panel"
                        id="accordion__panel-a"
                      >
                        <p>
                          Our organizational sprit believes that where design
                          meets passion &amp; love with space, good architecture
                          happens here. We are a leading architecture firm
                          dedicated to creating visionary designs.
                        </p>
                      </div>
                    </div>
                    <div
                      data-accordion-component="AccordionItem"
                      className="accordion__item"
                    >
                      <div
                        data-accordion-component="AccordionItemHeading"
                        role="heading"
                        className="accordion__heading"
                        aria-level={3}
                      >
                        <div
                          className="accordion__button"
                          id="accordion__heading-b"
                          aria-disabled="false"
                          aria-expanded="false"
                          aria-controls="accordion__panel-b"
                          role="button"
                          tabIndex={0}
                          data-accordion-component="AccordionItemButton"
                        >
                          Our Vision
                        </div>
                      </div>
                      <div
                        data-accordion-component="AccordionItemPanel"
                        className="accordion__panel"
                        id="accordion__panel-b"
                        hidden
                      >
                        <p>
                          Our organizational sprit believes that where design
                          meets passion &amp; love with space, good architecture
                          happens here. We are a leading architecture firm
                          dedicated to creating visionary designs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-wrap-content">
                    <h2>
                      Architecture &amp; Interior Is Where We Belong, We Really
                      Love Our Job
                    </h2>
                    <p>
                      Traz is a full-service design firm providing architecture,
                      master planning, urban design, interior architecture,
                      space planning and programming. Our portfolio of completed
                      work includes highly acclaimed and award-winning projects.
                    </p>
                    <p>
                      At Traz, we believe that architecture goes beyond mere
                      structures, it is an art form that shapes the way we live,
                      work, and interact with our surroundings. With a deep
                      understanding of the built environment and an unwavering
                      commitment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-wrap-shape">
          <img
            alt="image"
            loading="lazy"
            width={768}
            height={140}
            decoding="async"
            data-nimg={1}
            style={{ color: "transparent" }}
            src="/_next/static/media/archi-text2.0c7bca41.png"
          />
        </div>
      </div>

      <Contact/>
    </>
  );
};

export default About;
