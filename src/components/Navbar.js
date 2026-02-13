import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* ===== TOP BAR ===== */}
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

      {/* ===== LOGO ===== */}
      <div className="logo">
        AWE$OME STUFF TO BUY
      </div>

      {/* ===== MENU ===== */}
      <div className="menu">
        <Link to="/new">NEW</Link>

        {/* Dropdown */}
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

        <Link to="/cool-gadgets">COOL GADGETS</Link>
        <Link to="/gamer-gifts">GAMER GIFTS</Link>
        <Link to="/geek">GEEK</Link>
        <Link to="/funny">FUNNY</Link>
        <Link to="/office">OFFICE</Link>
        <Link to="/under-25">UNDER ₹2000</Link>
      </div>

    </div>
  );
};

export default Navbar;
