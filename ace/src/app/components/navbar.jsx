"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle, faYelp } from '@fortawesome/free-brands-svg-icons';

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
        <button className="close-btn" onClick={closeMenu}>✖</button>
        <ul>
          <li>
            <h1>
              <Link href="https://app.acuityscheduling.com/schedule.php?owner=36047530" onClick={closeMenu}>
                Services
              </Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link href="/team" onClick={closeMenu}>
                Team
              </Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link href="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link href="https://app.acuityscheduling.com/schedule.php?owner=36047530" onClick={closeMenu}>
                Book Now
              </Link>
            </h1>
          </li>
          <li className="sidebar__brand-icons">
          <Link href="https://www.instagram.com/ace_barbershop_gg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="brand-icon" />
            </Link>
            <Link href="https://www.google.com/maps/@33.7872659,-118.0312444,14z/data=!4m2!11m1!2sbSn9LSgZQlCScqM8GK8BNg?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" aria-label="Google">
              <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
            </Link>
            <Link href="https://www.yelp.com/biz/ace-barbershop-garden-grove" aria-label="Yelp">
              <FontAwesomeIcon icon={faYelp} className="brand-icon" />
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
              <Link href="https://app.acuityscheduling.com/schedule.php?owner=36047530">Services</Link>
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
            <Link href="https://app.acuityscheduling.com/schedule.php?owner=36047530">Book Now</Link>
          </h1>
        </li>
        <li className="sidebar__brand-icons">
          <Link href="https://www.instagram.com/ace_barbershop_gg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="brand-icon" />
            </Link>
            <Link href="https://www.google.com/maps/@33.7872659,-118.0312444,14z/data=!4m2!11m1!2sbSn9LSgZQlCScqM8GK8BNg?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" aria-label="Google">
              <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
            </Link>
            <Link href="https://www.yelp.com/biz/ace-barbershop-garden-grove" aria-label="Yelp">
              <FontAwesomeIcon icon={faYelp} className="brand-icon" />
            </Link>
          </li>
      </div>
    </nav>
  );
};

export default Navbar;
