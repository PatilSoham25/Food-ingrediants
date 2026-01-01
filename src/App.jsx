import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import WhyFiGlobal from './Components/WhyFiGlobal/WhyFiGlobal'
import Opportunities from './Components/Opportunities/Opportunities'
import Services from './Components/Services/Services'
import Stats from './Components/Stats/Stats'
import TestimonialSlider from './Components/TestimonialSlider/TestimonialSlider'
import Footer from './Components/Footer/Footer'

const App = () => {
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Opportunities />
      <WhyFiGlobal />
      <Services />
      <Stats />
      <TestimonialSlider />
      <Footer />
    </div>
  )
}

export default App
