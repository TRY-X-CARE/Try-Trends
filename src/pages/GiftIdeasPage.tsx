import React from 'react';
import { giftCollections } from '../data/gift-collections';
import GiftCollectionCard from '../components/gift-ideas/GiftCollectionCard';

const GiftIdeasPage: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Gift Collections</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our curated gift collections, thoughtfully assembled for every occasion.
            Whether it's a birthday, wedding, or just because, find the perfect gift to make any moment special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftCollections.map(collection => (
            <GiftCollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-medium mb-4">Can't Find The Perfect Gift?</h2>
            <p className="text-gray-600 mb-6">
              If you can't find exactly what you're looking for in our curated collections, 
              our team is here to help. Share your ideas and we'll create a custom gift 
              that perfectly matches your vision.
            </p>
            <a href="/custom-gift" className="btn btn-primary">Request Custom Gift</a>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://images.pexels.com/photos/6707631/pexels-photo-6707631.jpeg" 
              alt="Gift wrapping" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GiftIdeasPage;