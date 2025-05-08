import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">About Try-Trend</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're on a mission to help you discover unique products and create 
            meaningful gifts that celebrate life's special moments.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg" 
              alt="Our team working on gift curation" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <span className="text-primary-600 font-medium">Our Story</span>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 mt-2">
              From Passion Project to Unique Gift Destination
            </h2>
            <p className="text-gray-700 mb-6">
              Try-Trend began in 2020 as a small passion project born out of a simple observation: 
              finding truly unique, meaningful gifts was surprisingly difficult in the age of mass production.
            </p>
            <p className="text-gray-700 mb-6">
              Our founder, Emma Chen, started by curating small collections of handmade and artisanal 
              products from independent creators. What began as a small online showcase quickly grew 
              into a thriving marketplace as people discovered the joy of giving thoughtfully selected gifts.
            </p>
            <p className="text-gray-700">
              Today, we work with over 200 makers and designers to bring you a constantly evolving 
              collection of trending products and custom gift options that you won't find anywhere else.
            </p>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="bg-gray-50 rounded-lg p-12 mb-20">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Our Mission & Values</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Try-Trend, our mission and values guide everything we do, from the products we select 
              to the experiences we create for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">Thoughtful Curation</h3>
              <p className="text-gray-600">
                We carefully select each product, prioritizing quality, uniqueness, and ethical production.
                Every item tells a story and serves a purpose.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">Supporting Creators</h3>
              <p className="text-gray-600">
                We partner with independent artisans, designers, and small businesses to bring 
                their unique creations to a wider audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">Creating Moments</h3>
              <p className="text-gray-600">
                We believe that the right gift can create lasting memories and strengthen connections 
                between people, making every occasion more meaningful.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Our Team</span>
            <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-4">
              Meet the People Behind Try-Trend
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together experts in product curation, design, customer experience, 
              and logistics to create a seamless gifting experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg" 
                alt="Emma Chen" 
                className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-medium text-lg">Emma Chen</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg" 
                alt="David Park" 
                className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-medium text-lg">David Park</h3>
              <p className="text-gray-600">Head of Product Curation</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg" 
                alt="Sarah Johnson" 
                className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-medium text-lg">Sarah Johnson</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg" 
                alt="Miguel Rodriguez" 
                className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-medium text-lg">Miguel Rodriguez</h3>
              <p className="text-gray-600">Customer Experience Lead</p>
            </div>
          </div>
        </div>
        
        {/* Join Our Team CTA */}
        <div className="bg-primary-600 text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Join Our Team</h2>
              <p className="text-primary-100 mb-6">
                We're always looking for passionate, creative people to join our growing team. 
                Check out our open positions and become part of our story.
              </p>
              <a href="/careers" className="btn bg-white text-primary-700 hover:bg-gray-100 transition-colors">
                View Open Positions
              </a>
            </div>
            <div className="bg-primary-700 p-12 flex items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Collaborative Environment</h4>
                    <p className="text-primary-200 text-sm">Work with a diverse, talented team</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Growth Opportunities</h4>
                    <p className="text-primary-200 text-sm">Develop your skills and advance your career</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Competitive Benefits</h4>
                    <p className="text-primary-200 text-sm">We take care of our team members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;