import React from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar__container'>
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
            <div className="nav__img">
                <Link href= '/'>
                    <img src='/Ace_Logo.png' alt="" className="nav__logo" />
                </Link>
            </div>
            <div className="nav__right">
                <li className="nav__link">
                    <h1>
                        <Link href="/Services">Book Now</Link>
                    </h1>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;
