import React from "react";
import "./About.css";
import "./index.css";

import logo from "./Pictures/logo.jpg";
const About = () => {
  return (
    <div className="aboutPage">
      <div className="About">
        <img src={logo} alt="" className="logo2" />
        <h1> WELCOME</h1>
        <p>
          We at Pest Shield want to protect your greatest treasures - your
          family and your home. Make us your premier partner if you need expert
          help in identifying and solving any pest-related problems you may have
          in the most innovative, efficient, and sustainable ways possible. Our
          team can assist you in getting rid of unwanted intruders and give you
          solid advice to prevent another infestation. Feel free to contact us
          today to know more about our pest control services in your area.
        </p>
        <button className="btn1"> About us</button>
      </div>
    </div>
  );
};

export default About;
