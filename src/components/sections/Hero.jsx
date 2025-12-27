import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import Button from '../common/Button';
import { BUSINESS_INFO } from '../../data/constants';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=2000"
          alt="PetSmart Store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4 text-orange-400 font-semibold uppercase tracking-wider text-sm">
              <Star className="fill-orange-400" size={16} />
              <span>{BUSINESS_INFO.rating} Rating ({BUSINESS_INFO.reviewCount} Reviews)</span>
            </div>

            <div className="w-fit mb-10">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-orange-500">Pet</span>
                <span className="text-cyan-400">Smart</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 font-light italic text-left mt-[5px] ml-1">
                {BUSINESS_INFO.tagline}
              </p>
            </div>

            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
              {BUSINESS_INFO.descriptionShort}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Pets
              </Button>
              <Button
                variant="outline"
                className="!text-white !border-white hover:!bg-white/10"
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.plusCode)}`)}
              >
                <MapPin size={20} /> Visit Store
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
