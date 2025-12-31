import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import WhyFiGlobal from './Components/WhyFiGlobal/WhyFiGlobal'
import Opportunities from './Components/Opportunities/Opportunities'
import Services from './Components/Services/Services'
import Stats from './Components/Stats/Stats'
import TestimonialSlider from './Components/TestimonialSlider/TestimonialSlider'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyFiGlobal />
      <Opportunities />
      <Services />
      <Stats />
      <TestimonialSlider />
      <Footer />
    </div>
  )
}

export default App
