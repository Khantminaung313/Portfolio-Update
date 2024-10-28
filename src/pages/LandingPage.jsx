import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Service from "../sections/Service";
const LandingPage = () => {
      return (
          <div>
              <Hero />
              <About />
              <Service />
              <Projects />
              <Contact />
          </div>
      );
}

export default LandingPage