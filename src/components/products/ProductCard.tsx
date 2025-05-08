import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  // Calculate actual price if there's a discount
  const actualPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="card group relative animate-fade-in">
      {/* Product Image and Overlay */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Tags */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-secondary-500 text-white text-xs font-medium px-2 py-1 rounded">
              New
            </span>
          )}
          {product.isTrending && (
            <span className="bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
              Trending
            </span>
          )}
          {product.discount && (
            <span className="bg-error-500 text-white text-xs font-medium px-2 py-1 rounded">
              {product.discount}% Off
            </span>
          )}
        </div>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <button 
              onClick={() => addToCart(product)}
              className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={20} />
            </button>
            <button 
              className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-1 text-sm text-gray-500">{product.category}</div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-medium hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Price */}
        <div className="mt-2 flex items-center">
          <span className="font-bold text-lg">${actualPrice.toFixed(2)}</span>
          {product.discount && (
            <span className="ml-2 text-gray-500 line-through text-sm">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Rating */}
        <div className="mt-2 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400'
                    : i < product.rating
                    ? 'text-amber-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        {/* Stock Status */}
        <div className="mt-2 text-sm">
          {product.stock > 0 ? (
            product.stock <= 5 ? (
              <span className="text-amber-600">Only {product.stock} left</span>
            ) : (
              <span className="text-success-600">In Stock</span>
            )
          ) : (
            <span className="text-error-600">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;