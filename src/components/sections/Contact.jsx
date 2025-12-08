import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';
import { BUSINESS_INFO } from '../../data/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Visit Us" subtitle="Get In Touch" />

        <div className="flex flex-col lg:flex-row gap-8 overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Contact Details */}
          <div className="w-full lg:w-1/3 p-10 bg-gray-900 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Store Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Address</h4>
                  <p className="text-gray-400 leading-relaxed">{BUSINESS_INFO.address}</p>
                  <p className="text-sm text-orange-400 mt-2">{BUSINESS_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-gray-400">{BUSINESS_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-400">{BUSINESS_INFO.hours}</p>
                  <p className="text-sm text-green-400 mt-1">Open 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               <Button 
                variant="primary" 
                className="w-full justify-center"
                onClick={() => window.open(`tel:${BUSINESS_INFO.phone}`)}
              >
                Call Now
              </Button>
               <Button 
                variant="outline" 
                className="w-full justify-center !border-gray-600 !text-gray-300 hover:!bg-gray-800"
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.plusCode)}`)}
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map Frame */}
          <div className="w-full lg:w-2/3 min-h-[400px] relative">
            <iframe
              title="Map"
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.5683955688!2d75.7335!3d11.8689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUyJzA4LjAiTiA3NcKwNDQnMDAuNiJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
