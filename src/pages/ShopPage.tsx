import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductFilters from '../components/shop/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import { products } from '../data/products';
import { Product } from '../data/products';

const ShopPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Get filter values from URL
  const categoryParam = queryParams.get('category');
  const priceParam = queryParams.get('price');
  const sortParam = queryParams.get('sort') || 'newest';
  const filterParam = queryParams.get('filter');
  
  // State for filters
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(priceParam);
  const [selectedSort, setSelectedSort] = useState(sortParam);
  
  // Apply filters and update URL
  useEffect(() => {
    // Build query string
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedPrice) params.set('price', selectedPrice);
    if (selectedSort !== 'newest') params.set('sort', selectedSort);
    if (filterParam) params.set('filter', filterParam);
    
    // Update URL
    navigate({ search: params.toString() }, { replace: true });
    
    // Filter products
    let filtered = [...products];
    
    // Special filter (trending/new)
    if (filterParam === 'trending') {
      filtered = filtered.filter(p => p.isTrending);
    } else if (filterParam === 'new') {
      filtered = filtered.filter(p => p.isNew);
    }
    
    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === selectedCategory.replace(/-/g, ' ')
      );
    }
    
    // Price filter
    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-').map(Number);
      filtered = filtered.filter(p => {
        const actualPrice = p.discount
          ? p.price * (1 - p.discount / 100)
          : p.price;
        return actualPrice >= min && actualPrice <= max;
      });
    }
    
    // Sorting
    switch (selectedSort) {
      case 'price-asc':
        filtered.sort((a, b) => {
          const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filtered.sort((a, b) => {
          const priceA = a.discount ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount ? b.price * (1 - b.discount / 100) : b.price;
          return priceB - priceA;
        });
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'newest':
      default:
        // Newest (isNew products first, then by id)
        filtered.sort((a, b) => {
          if (a.isNew === b.isNew) return 0;
          return a.isNew ? -1 : 1;
        });
        break;
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPrice, selectedSort, filterParam, navigate]);
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  const handlePriceChange = (price: string | null) => {
    setSelectedPrice(price);
  };
  
  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };
  
  // Build the page title based on filters
  const getPageTitle = () => {
    if (filterParam === 'trending') return 'Trending Products';
    if (filterParam === 'new') return 'New Arrivals';
    if (selectedCategory) {
      return selectedCategory
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return 'All Products';
  };

  return (
    <main className="pt-32 pb-20">
      <div className="container-custom">
        <div className="mb-10">
          <h1 className="text-3xl font-medium mb-4">{getPageTitle()}</h1>
          <p className="text-gray-600">
            Browse our collection of {getPageTitle().toLowerCase()} and find the perfect item for you or as a gift.
          </p>
        </div>
        
        <ProductFilters
          selectedCategory={selectedCategory}
          selectedPrice={selectedPrice}
          selectedSort={selectedSort}
          onCategoryChange={handleCategoryChange}
          onPriceChange={handlePriceChange}
          onSortChange={handleSortChange}
        />
        
        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
};

export default ShopPage;