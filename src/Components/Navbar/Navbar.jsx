import React, { useState } from 'react';
import './Navbar.css';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <div className="navbar-section">
        <div className="nav-logo">
          <img
            src="https://www.figlobal.com/content/experience-fragments/esa/hn/figlobal/navigation-experience-fragment/master/_jcr_content/root/n1navigationbar_copy/image1.coreimg.png/1707472060559/fi-global-logo.png"
            alt="logo"
          />
        </div>

        {/* DESKTOP NAV */}
        <ul className="nav-li">
          <li>Global Events</li>

          <li className="dropdown">
            <span>
              Services <ChevronDown color="#d46216" size={16} />
            </span>
            <ul className="dropdown-menu">
              <li>Succeed with Fi</li>
              <li>About</li>
            </ul>
          </li>

          <li>Sponsorship</li>
          <li>Sustainability</li>

          <li className="dropdown">
            <span>
              About Us <ChevronDown color="#d46216" size={16} />
            </span>
            <ul className="dropdown-menu">
              <li>Who are we</li>
              <li>Press</li>
              <li>Contact Us</li>
            </ul>
          </li>
        </ul>

        <div className="nav-btn">
          <button>Explore Events</button>
          <button>Join Our Community</button>
        </div>

        {/* HAMBURGER */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <Menu size={30} />
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <X size={30} />
        </div>

        <ul className="mobile-nav">
          <li>Global Events</li>

          <li className="mobile-dropdown">
            <span onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown size={18} />
            </span>
            {servicesOpen && (
              <ul className="mobile-dropdown-menu">
                <li>Succeed with Fi</li>
                <li>About</li>
              </ul>
            )}
          </li>

          <li>Sponsorship</li>
          <li>Sustainability</li>

          <li className="mobile-dropdown">
            <span onClick={() => setAboutOpen(!aboutOpen)}>
              About Us <ChevronDown size={18} />
            </span>
            {aboutOpen && (
              <ul className="mobile-dropdown-menu">
                <li>Who are we</li>
                <li>Press</li>
                <li>Contact Us</li>
              </ul>
            )}
          </li>
        </ul>

        <div className="mobile-btn">
          <button>Explore Events</button>
          <button>Join Our Community</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
