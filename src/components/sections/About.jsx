import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { BUSINESS_INFO } from '../../data/constants';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&q=80&w=1000" 
                  alt="PetSmart Peravoor Interior" 
                  className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-100 p-6 rounded-tl-3xl rounded-br-3xl hidden md:block shadow-lg z-10">
                <p className="text-orange-600 font-bold text-lg">Since 2023</p>
                <p className="text-gray-600 text-sm">Trusted by families</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <SectionTitle title="About PetSmart" subtitle="Who We Are" center={false} />
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {BUSINESS_INFO.descriptionLong}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-orange-50 p-4 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Friendly Staff</h4>
                <p className="text-sm text-gray-600">Expert guidance for all your pet needs.</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Pet Well-being</h4>
                <p className="text-sm text-gray-600">We prioritize the health and happiness of every pet.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
