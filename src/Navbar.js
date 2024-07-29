import React from "react";
import "./Navbar.css";
import logo from "./Pictures/logo.jpg";

export const Navbar = () => {
  return (
    <nav className="container-nav">
      <img src={logo} alt="logo" width={80} className="logo" />

      <ul>
        <li> Home</li>
        <li> About us</li>
        <li> Services</li>
        <li> Gallery</li>
        <li>
          {" "}
          <button className="Btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};
