import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Service from "../sections/Service";
const LandingPage = () => {
      return (
          <div>
              <Hero />
              <About />
              <Service />
              <Portfolio />
              <Contact />
          </div>
      );
}

export default LandingPage