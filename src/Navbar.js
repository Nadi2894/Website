import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./Pictures/logo.jpg";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container-nav  ${sticky ? "dark-nav" : ""}`}>
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
