import React from 'react'
import './Navbar.css'
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='navbar-section'>
      <div className='nav-logo'>
        <img src="https://www.figlobal.com/content/experience-fragments/esa/hn/figlobal/navigation-experience-fragment/master/_jcr_content/root/n1navigationbar_copy/image1.coreimg.png/1707472060559/fi-global-logo.png" alt="" />
      </div>
      <div className='nav-li'>
        <li>Global Events</li>
        <li className='dropdown'>
            <span>Services <ChevronDown color="#d46216" /></span>
            <ul className='dropdown-menu'>
                <li>Succeed with Fi</li>
                <li>About</li>
            </ul>
        </li>
        <li>Sponsorship</li>
        <li>Sustainability</li>
        <li className='dropdown'>
            <span>About Us <ChevronDown color="#d46216" /></span>
            <ul className='dropdown-menu'>
                <li>Who are we</li>
                <li>Press</li>
                <li>Contact Us</li>
            </ul>
        </li>
      </div>
      <div className='nav-btn'>
        <button>Explore Events</button>
        <button>Join Our Community</button>
      </div>
    </div>
  )
}

export default Navbar
