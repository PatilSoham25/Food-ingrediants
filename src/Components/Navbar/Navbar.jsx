import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <div className="navbar-section" data-aos="fade-down">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://www.figlobal.com/content/experience-fragments/esa/hn/figlobal/navigation-experience-fragment/master/_jcr_content/root/n1navigationbar_copy/image1.coreimg.png/1707472060559/fi-global-logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <ul className="nav-li">
          <li><Link to="/">Global Events</Link></li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>Sponsorship</li>
          <li>Sustainability</li>

          <li className="dropdown">
            <span>
              About Us <ChevronDown color="#d46216" size={16} />
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/about/who-we-are">Who are we</Link></li>
              <li><Link to="/about/press">Press</Link></li>
              <li><Link to="/about/contact">Contact Us</Link></li>
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

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <X size={30} />
        </div>

        <ul className="mobile-nav">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Global Events</Link>
          </li>

          <li className="mobile-dropdown">
            <span onClick={() => setServicesOpen(!servicesOpen)}>
              Services <ChevronDown size={18} />
            </span>

            {servicesOpen && (
              <ul className="mobile-dropdown-menu">
                <li>
                  <Link to="/services" onClick={() => setMenuOpen(false)}>
                    Succeed with Fi
                  </Link>
                </li>
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
                <li>
                  <Link to="/about/who-we-are" onClick={() => setMenuOpen(false)}>
                    Who are we
                  </Link>
                </li>
                <li>
                  <Link to="/about/press" onClick={() => setMenuOpen(false)}>
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/about/contact" onClick={() => setMenuOpen(false)}>
                    Contact Us
                  </Link>
                </li>
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
