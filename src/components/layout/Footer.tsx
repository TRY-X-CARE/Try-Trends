import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="text-2xl font-serif font-bold text-white mb-4 inline-block">
              Try<span className="text-primary-400">Trend</span>
            </Link>
            <p className="mb-4">
              Discover unique trending products and personalized gifts for every occasion. We curate 
              the best selection of items to help you celebrate life's moments.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/gift-ideas" className="hover:text-primary-400 transition-colors">
                  Gift Ideas
                </Link>
              </li>
              <li>
                <Link to="/custom-gift" className="hover:text-primary-400 transition-colors">
                  Custom Gift
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Help & Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Help & Info</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="hover:text-primary-400 transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-primary-400 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-primary-400 transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <span>123 Trend Street, New York, NY 10001</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <a href="mailto:hello@trytrend.com" className="hover:text-primary-400 transition-colors">
                  hello@trytrend.com
                </a>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-primary-400 flex-shrink-0" />
                <a href="tel:+12125551234" className="hover:text-primary-400 transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 flex-grow rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-400"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} TryTrend. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center mt-4 md:mt-0">
              <img src="https://via.placeholder.com/60x30/4F46E5/FFFFFF?text=Visa" alt="Visa" className="h-8 mx-1" />
              <img src="https://via.placeholder.com/60x30/4F46E5/FFFFFF?text=MC" alt="Mastercard" className="h-8 mx-1" />
              <img src="https://via.placeholder.com/60x30/4F46E5/FFFFFF?text=Amex" alt="American Express" className="h-8 mx-1" />
              <img src="https://via.placeholder.com/60x30/4F46E5/FFFFFF?text=PayPal" alt="PayPal" className="h-8 mx-1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;