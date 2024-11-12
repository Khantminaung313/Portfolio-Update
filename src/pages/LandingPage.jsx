import { useState } from "react";
import ParticleComponent from "../components/ParticleComponent";
import ThankYou from "../components/ThankYou";
import ToTop from "../components/ToTop";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Service from "../sections/Service";
import Skills from "../sections/Skills";
const LandingPage = () => {
  const [popup, setPopup] = useState(false);

  const closePopup = () => {
    setPopup(false);
  };

  const openPopup = () => {
    setPopup(true);
  };

  return (
    <div>
      <ThankYou popup={popup} onClick={() => closePopup()} />
      <ParticleComponent />
      <ToTop />
      <Hero />
      <About />
			<Skills />
      <Service />
      <Portfolio />
      <Contact openPopup={openPopup} />
    </div>
  );
};

export default LandingPage;
