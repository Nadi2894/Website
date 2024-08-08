import React from "react";
import { Navbar } from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Offer from "./Offer";
import Extermination from "./Extermination";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import Title from "./Title";
import logo from "./Pictures/logo.jpg";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <img src={logo} alt="" className="logo2" />
      <Title title="WELCOME" />
      <About />
      <Title title="WHY CHOOSE US" />
      <Offer />
      <Title title="WHAT DO WE EXTERMINATE" />
      <Extermination />
      <Title title="GALLERY" />

      <Gallery />
      <div className="container">
        <Title title="GET IN TOUCH" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
