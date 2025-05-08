import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg)',
          backgroundPosition: 'center 70%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30" />
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl animate-slide-up">
          <span className="uppercase tracking-widest text-sm font-medium text-primary-400 mb-4 block">
            Unique Gifting Experience
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Discover Trending Products & Custom Gift Ideas
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            Explore our curated collection of trending products and personalized gifts for every occasion. 
            Find the perfect way to celebrate life's special moments.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/custom-gift" className="btn hover:text-white border-white flex items-center group">
              <span>Custom Gift Request</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-1 h-10 mt-2 relative">
            <div className="absolute w-[1px] h-full bg-white left-0 opacity-30"></div>
            <div className="absolute w-[1px] h-6 bg-white left-0 animate-[scroll_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;