import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDropdown from '../cart/CartDropdown';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  // Handle scroll state for header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold">
            Try<span className="text-primary-600">Trend</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium hover:text-primary-600 transition-colors ${
                location.pathname === '/' ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`font-medium hover:text-primary-600 transition-colors ${
                location.pathname === '/shop' ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/gift-ideas"
              className={`font-medium hover:text-primary-600 transition-colors ${
                location.pathname === '/gift-ideas' ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Gift Ideas
            </Link>
            <Link
              to="/custom-gift"
              className={`font-medium hover:text-primary-600 transition-colors ${
                location.pathname === '/custom-gift' ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Custom Gift
            </Link>
            <Link
              to="/about"
              className={`font-medium hover:text-primary-600 transition-colors ${
                location.pathname === '/about' ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium hover:text-primary-600 transition-colors ${
                location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:flex text-gray-800 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="hidden md:flex text-gray-800 hover:text-primary-600 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button 
              className="relative text-gray-800 hover:text-primary-600 transition-colors"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom mx-auto py-4 px-4 space-y-4">
          <Link
            to="/"
            className="block py-2 font-medium hover:text-primary-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block py-2 font-medium hover:text-primary-600 transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/gift-ideas"
            className="block py-2 font-medium hover:text-primary-600 transition-colors"
          >
            Gift Ideas
          </Link>
          <Link
            to="/custom-gift"
            className="block py-2 font-medium hover:text-primary-600 transition-colors"
          >
            Custom Gift
          </Link>
          <Link
            to="/about"
            className="block py-2 font-medium hover:text-primary-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 font-medium hover:text-primary-600 transition-colors"
          >
            Contact
          </Link>
          <div className="flex space-x-4 py-2">
            <button className="text-gray-800 hover:text-primary-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-800 hover:text-primary-600 transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
    </header>
  );
};

export default Header;