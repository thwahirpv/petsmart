import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { REVIEWS } from '../../data/constants';

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-orange-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Customer Stories" subtitle="What People Say" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col relative"
            >
              <Quote className="absolute top-6 right-6 text-orange-200" size={40} />
              
              <div className="flex gap-1 mb-4 text-orange-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-gray-400 text-xs">Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
