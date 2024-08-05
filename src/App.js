import React from "react";
import { Navbar } from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Offer from "./Offer";
import Extermination from "./Extermination";
import Gallery from "./Gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <Offer />
      <div className="container">
        <Extermination />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
