"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar__container">
      {/* Hamburger Button (Mobile Only) */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar Navigation (Pop-out from Left) */}
      <div className={`nav__sidebar ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          ✖
        </button>
        <ul>
          <li>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/team" onClick={closeMenu}>
              Team
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu}>
              Book Now
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay (Closes Sidebar when clicked outside) */}
      {isOpen && <div className="overlay active" onClick={closeMenu}></div>}

      {/* Left Navigation (Services, Team, Gallery) */}
      <div className="nav__left">
        <ul className="nav__links">
          <li className="nav__link">
            <h1>
              <Link href="/services">Services</Link>
            </h1>
          </li>
          <li className="nav__link">
            <h1>
              <Link href="/team">Team</Link>
            </h1>
          </li>
          <li className="nav__link">
            <h1>
              <Link href="/gallery">Gallery</Link>
            </h1>
          </li>
        </ul>
      </div>

      {/* Logo (Hidden on Mobile) */}
      <div className="nav__img">
        <Link href="/">
          <img src="/Ace_Logo.png" alt="Logo" className="nav__logo" />
        </Link>
      </div>

      {/* Right Navigation (Book Now) */}
      <div className="nav__right">
        <li className="nav__link">
          <h1>
            <Link href="/services">Book Now</Link>
          </h1>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
