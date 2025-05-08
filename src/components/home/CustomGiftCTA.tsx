import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, MessageCircle, ArrowRight } from 'lucide-react';

const CustomGiftCTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <span className="inline-block bg-primary-700 text-primary-200 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Personalized Gifting
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Can't Find The Perfect Gift?</h2>
            <p className="text-primary-100 text-lg mb-8 max-w-lg">
              Share your gift idea with our creative team and we'll help you bring it to life. 
              Whether it's a custom piece or a curated gift set, we're here to make it special.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex">
                <Gift className="flex-shrink-0 w-6 h-6 mr-3 text-primary-300" />
                <div>
                  <h3 className="font-medium mb-1">Custom Gift Creation</h3>
                  <p className="text-primary-200 text-sm">
                    Tell us your vision and we'll craft it with care.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <MessageCircle className="flex-shrink-0 w-6 h-6 mr-3 text-primary-300" />
                <div>
                  <h3 className="font-medium mb-1">Direct Communication</h3>
                  <p className="text-primary-200 text-sm">
                    Chat directly with our creative team.
                  </p>
                </div>
              </div>
            </div>
            
            <Link to="/custom-gift" className="btn bg-white text-primary-600 hover:bg-gray-100 transition-colors inline-flex items-center group">
              <span>Start Your Custom Request</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/7952605/pexels-photo-7952605.jpeg" 
              alt="Custom gift being wrapped" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomGiftCTA;