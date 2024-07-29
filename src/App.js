import React from "react";
import { Navbar } from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Offer from "./Offer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offer />
    </div>
  );
};

export default App;
