import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GiftCollection } from '../../data/gift-collections';

interface GiftCollectionCardProps {
  collection: GiftCollection;
}

const GiftCollectionCard: React.FC<GiftCollectionCardProps> = ({ collection }) => {
  return (
    <div className="card group overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded">
          {collection.occasionTag.charAt(0).toUpperCase() + collection.occasionTag.slice(1)}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-medium mb-2">{collection.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{collection.description}</p>
        
        <div className="mt-auto">
          <Link 
            to={`/gift-ideas/${collection.slug}`}
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 group"
          >
            <span>Explore Collection</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftCollectionCard;