import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // NEW

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="social-links">
          <span>facebook</span>
          <span>twitter</span>
        </div>

        <div className="top-links">
          <span>search</span>
          <span>newsletter</span>
          <span>contact</span>
          <span>submit</span>
        </div>
      </div>

      {/* NAV HEADER (Logo + Hamburger) */}
      <div className="nav-header">
        <div className="logo">
          AWE$OME STUFF TO BUY
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${mobileMenu ? "active" : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MENU */}
      <div className={`menu ${mobileMenu ? "open" : ""}`}>
        <Link to="/new" onClick={() => setMobileMenu(false)}>NEW</Link>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="dropbtn">
            GIFTS BY RECIPIENT ▾
          </span>

          {dropdown && (
            <div className="dropdown-content">
              <Link to="/men">FOR MEN</Link>
              <Link to="/women">FOR WOMEN</Link>
              <Link to="/kids">FOR KIDS</Link>
              <Link to="/coworkers">FOR COWORKERS</Link>
              <Link to="/parents">FOR PARENTS</Link>
              <Link to="/dad">FOR DAD</Link>
              <Link to="/mom">FOR MOM</Link>
              <Link to="/pets">FOR PETS</Link>
            </div>
          )}
        </div>

        <Link to="/cool-gadgets" onClick={() => setMobileMenu(false)}>COOL GADGETS</Link>
        <Link to="/gamer-gifts" onClick={() => setMobileMenu(false)}>GAMER GIFTS</Link>
        <Link to="/geek" onClick={() => setMobileMenu(false)}>GEEK</Link>
        <Link to="/funny" onClick={() => setMobileMenu(false)}>FUNNY</Link>
        <Link to="/office" onClick={() => setMobileMenu(false)}>OFFICE</Link>
        <Link to="/under-25" onClick={() => setMobileMenu(false)}>UNDER ₹2000</Link>
      </div>

    </div>
  );
};

export default Navbar;