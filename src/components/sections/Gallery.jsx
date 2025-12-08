import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800", // Puppy grooming/play
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", // Dog face closeup
    "https://images.unsplash.com/photo-1597843786271-105124152c74?auto=format&fit=crop&q=80&w=800", // Kitten
    "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800", // Shopping shelves
    "https://images.unsplash.com/photo-1520313847391-e45a95fc76ba?auto=format&fit=crop&q=80&w=800", // Fish aquarium
    "https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&q=80&w=800"  // Store interior
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Store Gallery" subtitle="A Glimpse Inside" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`rounded-xl overflow-hidden shadow-lg cursor-pointer h-64 ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
