import React from "react";
import "./Gallery.css";
import img1 from "./Pictures/img1.jpeg";
import img2 from "./Pictures/img2.jpg";
import img4 from "./Pictures/img4.jpeg";

const Gallery = () => {
  return (
    <div className="Gallery">
      <h1>GALLERY</h1>
      <div className="gallery-photos">
        <img src={img1} alt="" />
        <img src={img2} alt="" />

        <img src={img4} alt="" />
      </div>
      <button className="btn1"> See more</button>
    </div>
  );
};

export default Gallery;
