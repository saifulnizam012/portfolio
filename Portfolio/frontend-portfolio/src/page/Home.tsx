import React from "react";
import Experience from "../Component/Home/experience";
import Project from "../Component/Home/project";
import Footer from "../Component/Layout/Footer";
import Header from "../Component/Layout/Header";
import Contact from "../Component/Home/contact";
import About from "../Component/Home/about";
import HeroBanner from "../Component/Home/herobanner";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <About />
      <Project />
      {/* <Contact /> */}

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
