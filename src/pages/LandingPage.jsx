import { useRef } from "react";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Service from "../sections/Service";
import Skills from "../sections/Skills";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const slider = useRef();
    const component = useRef();
    useEffect(() => {
      let ctx = gsap.context(() => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + slider.current.offsetWidth
          }
        });
      }, component);
      return () => ctx.revert();
    });
    
  
      return (
          <div ref={component} className="relative">
              <Hero />
              <div ref={slider} style={{ width:"300%", height: "100vh", display: "flex", flexWrap: "nowrap" }}>
                      <About />
                      <Skills />
                      <Service />
              </div>
              <Contact />
          </div>
      );
}

export default LandingPage