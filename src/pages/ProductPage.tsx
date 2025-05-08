import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share, Heart, ShoppingBag, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Find the product based on the id
  const product = products.find(p => p.id === id);
  
  // State for quantity and selected image
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  // If product not found, navigate to shop page
  if (!product) {
    React.useEffect(() => {
      navigate('/shop');
    }, [navigate]);
    
    return null;
  }
  
  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  // Calculate actual price if there's a discount
  const actualPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;
  
  // Handle add to cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAddedToCart(true);
    
    // Reset the added to cart state after 3 seconds
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 3000);
  };
  
  // Gallery images or just the main image
  const galleryImages = product.gallery || [product.image];
  
  return (
    <main className="pt-32 pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/shop" 
            className="flex items-center text-primary-600 hover:text-primary-700"
          >
            <ChevronLeft size={16} className="mr-1" />
            <span>Back to Shop</span>
          </Link>
        </div>
        
        {/* Product Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <img 
                src={selectedImage || product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                      selectedImage === image ? 'border-primary-600' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
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
            
            {/* Product Name and Category */}
            <div className="mb-4">
              <span className="text-gray-500">{product.category}</span>
              <h1 className="text-3xl font-medium mt-1">{product.name}</h1>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold">${actualPrice.toFixed(2)}</span>
                {product.discount && (
                  <span className="ml-2 text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
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
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="font-medium mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/shop?tag=${tag}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <div className="flex items-center text-success-600">
                  <Check size={16} className="mr-2" />
                  <span>
                    {product.stock > 5
                      ? 'In Stock'
                      : `Only ${product.stock} left in stock - order soon!`}
                  </span>
                </div>
              ) : (
                <div className="text-error-600">Out of Stock</div>
              )}
            </div>
            
            {/* Add to Cart */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                
                <button
                  className={`btn ${
                    isAddedToCart
                      ? 'bg-success-600 hover:bg-success-700'
                      : 'btn-primary'
                  } flex items-center`}
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  {isAddedToCart ? (
                    <>
                      <Check size={16} className="mr-2" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} className="mr-2" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
                
                <button
                  className="btn btn-outline flex items-center"
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} className="mr-2" />
                  <span>Wishlist</span>
                </button>
              </div>
            </div>
            
            {/* Share */}
            <div className="flex items-center">
              <span className="text-gray-600 mr-3">Share:</span>
              <div className="flex space-x-2">
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                  aria-label="Share on Facebook"
                >
                  <Share size={16} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href
                  )}&text=${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sky-500"
                  aria-label="Share on Twitter"
                >
                  <Share size={16} />
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    `Check out this ${product.name}`
                  )}&body=${encodeURIComponent(
                    `I thought you might like this: ${window.location.href}`
                  )}`}
                  className="text-gray-500 hover:text-primary-600"
                  aria-label="Share via Email"
                >
                  <Share size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-medium mb-8">You Might Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;