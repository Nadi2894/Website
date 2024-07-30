import React from "react";
import { Navbar } from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Offer from "./Offer";
import Extermination from "./Extermination";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offer />

      <Extermination />
    </div>
  );
};

export default App;
