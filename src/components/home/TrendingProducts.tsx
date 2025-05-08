import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import ProductGrid from '../products/ProductGrid';

const TrendingProducts: React.FC = () => {
  // Get products marked as trending
  const trendingProducts = products.filter(product => product.isTrending).slice(0, 8);
  
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-medium mb-4">Trending Now</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our most popular products that everyone's talking about. 
              Stay ahead of the curve with these trending items.
            </p>
          </div>
          <Link 
            to="/shop?filter=trending"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 group mt-4 md:mt-0"
          >
            <span>View All Trending</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <ProductGrid products={trendingProducts} />
      </div>
    </section>
  );
};

export default TrendingProducts;