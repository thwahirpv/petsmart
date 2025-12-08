import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { CATEGORIES } from '../../data/constants';

const Products = () => {
  const [activeTab, setActiveTab] = useState('pets');

  return (
    <section id="pets" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Our Collection" subtitle="Find Your Perfect Companion" />

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={activeTab === 'pets' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('pets')}
            className="text-lg px-8"
          >
            Pets
          </Button>
          <Button 
            variant={activeTab === 'products' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('products')}
            className="text-lg px-8"
          >
            Products
          </Button>
        </div>

        {/* Grid */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CATEGORIES[activeTab].map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-square"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
