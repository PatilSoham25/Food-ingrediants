import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import WhyFiGlobal from './Components/WhyFiGlobal/WhyFiGlobal';
import Opportunities from './Components/Opportunities/Opportunities';
import Services from './Components/Services/Services';
import Stats from './Components/Stats/Stats';
import TestimonialSlider from './Components/TestimonialSlider/TestimonialSlider';
import Footer from './Components/Footer/Footer';
import Sectors from './Components/Sectors/Sectors';
import Form from './Components/Form/Form';
import Partners from './Components/Partners/Partners';
import Copyright from './Components/Copyright/Copyright';

// About pages (we will create these)
import About from './Pages/About/About';
import WhoWeAre from './Pages/About/WhoWeAre';
import Press from './Pages/About/Press';
import Contact from './Pages/About/Contact';
import ServicesPage from "./Pages/Services/ServicesPage";


const Home = () => (
  <>
    <Hero />
    <Opportunities />
    <WhyFiGlobal />
    <Services />
    <Sectors />
    <Stats />
    <TestimonialSlider />
    <Partners />
    <Form />
  </>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<ServicesPage />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/press" element={<Press />} />
        <Route path="/about/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <Copyright />
    </Router>
  );
};

export default App;
