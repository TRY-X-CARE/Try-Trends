import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { giftCollections } from '../data/gift-collections';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const GiftCollectionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the collection based on the slug
  const collection = giftCollections.find(c => c.slug === slug);
  
  // If collection not found, navigate to gift ideas page
  if (!collection) {
    // In a real app, you might want to show a 404 page
    // For simplicity, we'll just redirect
    React.useEffect(() => {
      navigate('/gift-ideas');
    }, [navigate]);
    
    return null;
  }
  
  // Get the products in this collection
  const collectionProducts = products.filter(product => 
    collection.products.includes(product.id)
  );
  
  return (
    <main className="pt-32 pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/gift-ideas" 
            className="flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft size={16} className="mr-1" />
            <span>Back to Collections</span>
          </Link>
        </div>
        
        {/* Collection Header */}
        <div className="relative mb-12 rounded-lg overflow-hidden">
          <img 
            src={collection.image} 
            alt={collection.title} 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container-custom p-6 md:p-10 text-white">
              <span className="inline-block bg-primary-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {collection.occasionTag.charAt(0).toUpperCase() + collection.occasionTag.slice(1)}
              </span>
              <h1 className="text-3xl md:text-4xl font-medium mb-3">{collection.title}</h1>
              <p className="text-white/80 max-w-2xl">{collection.description}</p>
            </div>
          </div>
        </div>
        
        {/* Collection Products */}
        <ProductGrid 
          products={collectionProducts} 
          title="Products in this Collection"
        />
        
        {/* Related Collections */}
        <div className="mt-20">
          <h2 className="text-2xl font-medium mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCollections
              .filter(c => c.id !== collection.id)
              .slice(0, 3)
              .map(relatedCollection => (
                <div key={relatedCollection.id} className="card group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={relatedCollection.image}
                      alt={relatedCollection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link 
                        to={`/gift-ideas/${relatedCollection.slug}`}
                        className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-primary-500 hover:text-white transition-colors"
                      >
                        View Collection
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{relatedCollection.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {relatedCollection.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GiftCollectionPage;