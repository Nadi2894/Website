import React from "react";
import "./Extermination.css";
import next from "./Pictures/next.png";
import back from "./Pictures/back.png";
import src1 from "./Pictures/src1.jpg";
import src2 from "./Pictures/src2.jpeg";
import src3 from "./Pictures/src3.png";
import src4 from "./Pictures/src4.png";
import src5 from "./Pictures/src5.png";
const Extermination = () => {
  return (
    <div>
      {" "}
      <div className="exterminate">
        <h1>WHAT DO WE EXTERMINATE?</h1>
        <img src={next} alt="" className="next-btn" />
        <img src={back} alt="" className="back-btn" />
        <div className="slider">
          <ul>
            <li>
              <div className="slide">
                <div className="pests">
                  <img src={src1} alt="" />
                  <div>
                    <h3>Ants</h3>
                  </div>
                </div>
                <p>
                  The reason ants march in a line boils down to scented
                  chemicals called pheromones. Ants use pheromones to
                  communicate with other ants. Ants will produce pheromones to
                  warn other ants about a nearby predator, to tell other ants to
                  help defend the colony, or to share the location of a food
                  source. So what does this have to with an ant’s tendency to
                  follow the leader?
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="pests">
                  <img src={src2} alt="" />
                  <div>
                    <h3>Cockroaches</h3>
                  </div>
                </div>
                <p>
                  Cockroaches are drawn to three key factors: moisture, food
                  debris, and warmth. Dishwashers, by their very design, can
                  unwittingly create the perfect environment for these pests to
                  thrive.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="pests">
                  <img src={src3} alt="" />
                  <div>
                    <h3>Flyers</h3>
                  </div>
                </div>
                <p>
                  The reason ants march in a line boils down to scented
                  chemicals called pheromones. Ants use pheromones to
                  communicate with other ants. Ants will produce pheromones to
                  warn other ants about a nearby predator, to tell other ants to
                  help defend the colony, or to share the location of a food
                  source. So what does this have to with an ant’s tendency to
                  follow the leader?
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="pests">
                  <img src={src4} alt="" />
                  <div>
                    <h3>Rodents</h3>
                  </div>
                </div>
                <p>
                  The reason ants march in a line boils down to scented
                  chemicals called pheromones. Ants use pheromones to
                  communicate with other ants. Ants will produce pheromones to
                  warn other ants about a nearby predator, to tell other ants to
                  help defend the colony, or to share the location of a food
                  source. So what does this have to with an ant’s tendency to
                  follow the leader?
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="pests">
                  <img src={src5} alt="" />
                  <div>
                    <h3>Spiders</h3>
                  </div>
                </div>
                <p>
                  The reason ants march in a line boils down to scented
                  chemicals called pheromones. Ants use pheromones to
                  communicate with other ants. Ants will produce pheromones to
                  warn other ants about a nearby predator, to tell other ants to
                  help defend the colony, or to share the location of a food
                  source. So what does this have to with an ant’s tendency to
                  follow the leader?
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Extermination;
