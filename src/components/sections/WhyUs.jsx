import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FEATURES } from '../../data/constants';

const WhyUs = () => {
  return (
    <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-30" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-400 font-bold tracking-wider uppercase mb-2 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              We Provide The Best Care For Your Pets
            </motion.h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              At PetSmart, we don't just sell pets; we build families. Our commitment to quality, health, and customer satisfaction sets us apart.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-orange-400 shrink-0" size={20} />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600" 
                 className="rounded-2xl shadow-lg mt-12 mb-auto"
                 alt="Happy Dog"
               />
               <img 
                 src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=600" 
                 className="rounded-2xl shadow-lg"
                 alt="Cuddly Cat"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
