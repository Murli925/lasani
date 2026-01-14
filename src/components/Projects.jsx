import React from "react";
import { useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TransitionContext from "../context/TransitionContext";

export default function Projects() {
  const main = useRef();
  const { completed } = useContext(TransitionContext);
  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;
      let panels = gsap.utils.toArray(".panel"),
        scrollStarts = [0],
        snapScroll = (value) => value; // for converting a pixel-based scroll value to the closest panel scroll position

      // create a ScrollTrigger for each panel that's only concerned about figuring out when its top hits the top of the viewport. We'll use the "start" of that ScrollTrigger to figure out snapping positions.
      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top",
        });
      });

      // once all the triggers have calculated their start/end, create the snap function that'll accept an overall progress value for the overall page, and then return the closest panel snapping spot based on the direction of scroll
      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map((trigger) => trigger.start); // build an Array with just the starting positions where each panel hits the top of the viewport
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts); // get a function that we can feed a pixel-based scroll value to and a direction, and then it'll spit back the closest snap position (in pixels)
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            // find the closest snapping spot based on the direction of scroll
            let scroll = snapScroll(
              self.scrollY() + self.deltaY,
              self.deltaY > 0 ? 1 : -1
            );
            goToSection(scrollStarts.indexOf(scroll)); // scroll to the index of the associated panel
          }
        },
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i) => {
    console.log("scroll to", i);
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 2,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <section className="" ref={main} data-aos="fade-up">
      <div className="recognition-wrap-area pb-100">
        <div className="container">
          <div className="row justify-center recognition-content mt-0">
            <h2 className="title" data-aos="fade-up">
              Our <span>Projects</span>
            </h2>
          </div>

          <div className="row panel">
            <div className="col-lg-12 col-md-12">
              <div className="recognition-image">
                <a href="/">
                  {" "}
                  <img
                    alt="recognition"
                    loading="lazy"
                    width={1320}
                    height={360}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="./images/project-1.jpg"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 recognition-content-col">
              <div className="recognition-content wrap-style">
                <span className="sub">PROJECTS</span>
                <h3 className="white">Farmhouse</h3>
              </div>
            </div>
          </div>
          <div className="row panel">
            <div className="col-lg-12 col-md-12">
              <div className="recognition-image">
                <a href="/">
                  {" "}
                  <img
                    alt="recognition"
                    loading="lazy"
                    width={1320}
                    height={360}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="./images/project-2.jpg"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 recognition-content-col">
              <div className="recognition-content wrap-style">
                <span className="sub">PROJECTS</span>
                <h3 className="white">Commercial Buildings</h3>
              </div>
            </div>
          </div>
          <div className="row panel">
            <div className="col-lg-12 col-md-12">
              <div className="recognition-image">
                <a href="/">
                  {" "}
                  <img
                    alt="recognition"
                    loading="lazy"
                    width={1320}
                    height={360}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="./images/project-3.jpg"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 recognition-content-col">
              <div className="recognition-content wrap-style">
                <span className="sub">PROJECTS</span>
                <h3 className="white">Residentials</h3>
              </div>
            </div>
          </div>
          <div className="row panel">
            <div className="col-lg-12 col-md-12">
              <div className="recognition-image">
                <a href="/">
                  {" "}
                  <img
                    alt="recognition"
                    loading="lazy"
                    width={1320}
                    height={360}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="./images/project-4.jpg"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 recognition-content-col">
              <div className="recognition-content wrap-style">
                <span className="sub">PROJECTS</span>
                <h3 className="white">Upcoming Projects</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

