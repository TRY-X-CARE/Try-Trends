import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import ProductGrid from '../products/ProductGrid';

const NewArrivals: React.FC = () => {
  // Get products marked as new
  const newProducts = products.filter(product => product.isNew).slice(0, 8);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-medium mb-4">New Arrivals</h2>
            <p className="text-gray-600 max-w-2xl">
              Be the first to discover our newest additions. Fresh products that have just landed on our shelves.
            </p>
          </div>
          <Link 
            to="/shop?filter=new"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 group mt-4 md:mt-0"
          >
            <span>View All New Arrivals</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <ProductGrid products={newProducts} />
      </div>
    </section>
  );
};

export default NewArrivals;