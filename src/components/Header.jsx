
import React, { useState } from 'react';
//import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <header>
                  <img src="/src/assets/images/logo.jpeg" alt="Website Logo" className="header-logo" />

            <nav>
                <ul className={isMenuOpen ? 'active' : ''}>
                    <li><a href=".home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Draft">Draft Version</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </header>
    );
};

export default Header;
