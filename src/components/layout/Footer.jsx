import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail, CreditCard } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/constants';

import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <img src={logo} alt={BUSINESS_INFO.name} className="h-12 w-auto mb-6 bg-white/10 rounded-lg p-2 backdrop-blur-sm" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              {BUSINESS_INFO.descriptionShort}
            </p>
            <div className="flex gap-4">
               {/* Placeholders for social icons */}
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Pets', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="shrink-0 text-orange-500" size={20} />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="shrink-0 text-orange-500" size={20} />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <ClockIcon className="shrink-0 text-orange-500" size={20} />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-2"><CreditCard size={16}/> Cards Accepted</span>
            <span>•</span>
            <span>NFC Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for Clock Icon which was missing in import
const ClockIcon = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default Footer;
