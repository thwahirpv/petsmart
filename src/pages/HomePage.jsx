import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import WhyUs from '../components/sections/WhyUs';
import Reviews from '../components/sections/Reviews';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';

import { Lock } from 'lucide-react';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyUs />
      
      <div className="relative">
        <div className="absolute inset-x-0 top-0 bottom-0 z-50 bg-white/10 backdrop-blur-md flex flex-col items-center justify-start pt-32">
          <div className="bg-white p-6 rounded-full shadow-2xl mb-6">
            <Lock size={48} className="text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center px-4">
            Contact developer to unlock
          </h2>
          <p className="text-gray-600 text-center">This section is hidden for demo purposes.</p>
        </div>
        
        <div className="opacity-40 pointer-events-none select-none filter blur-sm h-[800px] overflow-hidden">
           <Gallery />
           <Reviews />
           <Contact />
           <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
