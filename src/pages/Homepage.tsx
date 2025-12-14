// 
import React from "react";

// Import all homepage sections
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Services from "../components/Services";
// import Footer from "../components/Footer";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
