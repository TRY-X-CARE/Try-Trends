import React from 'react';
import { categories } from '../../data/products';
import CategoryCard from '../categories/CategoryCard';

const FeaturedCategories: React.FC = () => {
  const categoryImages = {
    'home-decor': 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    'kitchen': 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg',
    'stationery': 'https://images.pexels.com/photos/6248970/pexels-photo-6248970.jpeg',
    'wellness': 'https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg',
    'home-fragrance': 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg',
    'office': 'https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg',
    'jewelry': 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections of trending products, organized by category to help you find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.slice(0, 8).map((category) => (
            <CategoryCard 
              key={category.id} 
              id={category.id} 
              name={category.name} 
              image={categoryImages[category.id as keyof typeof categoryImages]} 
              count={Math.floor(Math.random() * 50) + 10} // Random count between 10-60 for demo
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;