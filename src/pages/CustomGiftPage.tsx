import React from 'react';
import GiftRequestForm from '../components/custom-gift/GiftRequestForm';
import LiveChat from '../components/custom-gift/LiveChat';

const CustomGiftPage: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Custom Gift Request</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Let our creative team help you create 
            the perfect custom gift. Share your ideas, and we'll bring them to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <GiftRequestForm />
          </div>
          
          {/* Info Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-xl font-medium mb-6">How It Works</h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 mr-4 font-medium">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Share Your Vision</h4>
                    <p className="text-gray-600">
                      Fill out the form with details about your gift idea, including budget, 
                      occasion, and any specific preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 mr-4 font-medium">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Direct Consultation</h4>
                    <p className="text-gray-600">
                      Our creative team will review your request and reach out within 24 hours 
                      to discuss your ideas in more detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 mr-4 font-medium">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Proposal & Pricing</h4>
                    <p className="text-gray-600">
                      We'll provide you with custom gift options, including images, descriptions, 
                      and pricing for your approval.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center text-primary-700 mr-4 font-medium">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Creation & Delivery</h4>
                    <p className="text-gray-600">
                      Once approved, we'll craft your custom gift with care and deliver it 
                      according to your timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
              <h3 className="font-medium text-lg mb-3">Have Questions?</h3>
              <p className="text-gray-600 mb-4">
                Our gift specialists are here to help. Chat with us now or check out our 
                FAQs for quick answers.
              </p>
              <div className="flex space-x-4">
                <button className="btn btn-primary px-4 py-2">
                  Start Live Chat
                </button>
                <a href="/faq" className="btn btn-outline px-4 py-2">
                  View FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Chat Component */}
      <LiveChat />
    </main>
  );
};

export default CustomGiftPage;