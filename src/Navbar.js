import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./Pictures/logo.jpg";
import { Link } from "react-scroll";
import menu from "./Pictures/menu.png";
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container-nav  ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" width={80} className="logo" />

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={200}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="About" smooth={true} offset={-260} duration={200}>
            About us
          </Link>
        </li>
        <li>
          {" "}
          <Link to="Offer" smooth={true} offset={-150} duration={200}>
            Services
          </Link>
        </li>
        <li>
          {" "}
          <Link to="Gallery" smooth={true} offset={-260} duration={200}>
            Gallery
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="contact"
            smooth={true}
            offset={-150}
            duration={200}
            className="Btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};
