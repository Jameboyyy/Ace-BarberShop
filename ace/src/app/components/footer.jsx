import React from 'react';
import Link from 'next/link';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer__container">
            <ul className="footer__links">
                <li className="footer__link">
                    <p>
                        <Link href="#home">Home</Link>
                    </p>
                </li>
                <li className="footer__link">
                    <p>
                        <Link href="#services">Services</Link>
                    </p>
                </li>
                <li className="footer__link">
                    <p>
                        <Link href="#team">Team</Link>
                    </p>
                </li>
                <li className="footer__link">
                    <p>
                        <Link href="#gallery">Gallery</Link>
                    </p>
                </li>
            </ul>
            <p className="footer__credits">
                &copy; 2025 Ace Barbershop. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
