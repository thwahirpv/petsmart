import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import WhyUs from '../components/sections/WhyUs';
import Reviews from '../components/sections/Reviews';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;
