import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import { useEffect } from "react";
//import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
//import Roadmap from "./components/Roadmap";
//import Services from "./components/Services";
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-M7D35PSYH4";
const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    // ReactGA.send({ hitType: "pageview", page: "/landingpage", title: "Landing Page" });
  }, [])
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        {/*<Collaboration />
         <Services /> */}
        <Pricing />
        {/* <Roadmap /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
