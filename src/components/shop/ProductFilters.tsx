import React, { useState } from 'react';
import { X, Filter, Check } from 'lucide-react';
import { categories } from '../../data/products';

interface ProductFiltersProps {
  selectedCategory: string | null;
  selectedPrice: string | null;
  selectedSort: string;
  onCategoryChange: (category: string | null) => void;
  onPriceChange: (price: string | null) => void;
  onSortChange: (sort: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  selectedPrice,
  selectedSort,
  onCategoryChange,
  onPriceChange,
  onSortChange,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const priceRanges = [
    { id: 'under-50', label: 'Under $50', value: '0-50' },
    { id: '50-100', label: '$50 - $100', value: '50-100' },
    { id: 'over-100', label: 'Over $100', value: '100-99999' },
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest' },
    { id: 'price-asc', label: 'Price: Low to High' },
    { id: 'price-desc', label: 'Price: High to Low' },
    { id: 'popular', label: 'Most Popular' },
  ];

  // Close filters when clicking outside on mobile
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsFiltersOpen(false);
    }
  };

  return (
    <div className="mb-8">
      {/* Mobile Filter Button */}
      <div className="flex items-center justify-between lg:hidden mb-4">
        <h2 className="text-xl font-medium">Filters</h2>
        <button
          onClick={() => setIsFiltersOpen(true)}
          className="btn btn-outline flex items-center"
        >
          <Filter size={16} className="mr-2" />
          <span>Filter & Sort</span>
        </button>
      </div>

      {/* Mobile Filters Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isFiltersOpen ? 'flex' : 'hidden'
        }`}
        onClick={handleOutsideClick}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium">Filters</h3>
            <button
              onClick={() => setIsFiltersOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Filter Content */}
          <div className="p-4 space-y-6">
            {/* Categories */}
            <div>
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                <div
                  className={`flex items-center cursor-pointer p-2 rounded ${
                    selectedCategory === null
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => onCategoryChange(null)}
                >
                  <Check
                    size={16}
                    className={`mr-2 ${
                      selectedCategory === null ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span>All Categories</span>
                </div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`flex items-center cursor-pointer p-2 rounded ${
                      selectedCategory === category.id
                        ? 'bg-primary-50 text-primary-600'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => onCategoryChange(category.id)}
                  >
                    <Check
                      size={16}
                      className={`mr-2 ${
                        selectedCategory === category.id
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                    <span>{category.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                <div
                  className={`flex items-center cursor-pointer p-2 rounded ${
                    selectedPrice === null
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => onPriceChange(null)}
                >
                  <Check
                    size={16}
                    className={`mr-2 ${
                      selectedPrice === null ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span>All Prices</span>
                </div>
                {priceRanges.map((range) => (
                  <div
                    key={range.id}
                    className={`flex items-center cursor-pointer p-2 rounded ${
                      selectedPrice === range.value
                        ? 'bg-primary-50 text-primary-600'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => onPriceChange(range.value)}
                  >
                    <Check
                      size={16}
                      className={`mr-2 ${
                        selectedPrice === range.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                    <span>{range.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sort Options (Mobile) */}
            <div>
              <h4 className="font-medium mb-3">Sort By</h4>
              <div className="space-y-2">
                {sortOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center cursor-pointer p-2 rounded ${
                      selectedSort === option.id
                        ? 'bg-primary-50 text-primary-600'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => onSortChange(option.id)}
                  >
                    <Check
                      size={16}
                      className={`mr-2 ${
                        selectedSort === option.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Left - Filters */}
        <div className="flex items-center space-x-6">
          {/* Categories */}
          <div className="relative group">
            <button className="btn btn-outline py-2">
              {selectedCategory
                ? categories.find((c) => c.id === selectedCategory)?.name
                : 'All Categories'}
            </button>
            <div className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 w-56">
              <div className="space-y-1">
                <div
                  className={`flex items-center cursor-pointer p-2 rounded ${
                    selectedCategory === null
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => onCategoryChange(null)}
                >
                  <Check
                    size={16}
                    className={`mr-2 ${
                      selectedCategory === null ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span>All Categories</span>
                </div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`flex items-center cursor-pointer p-2 rounded ${
                      selectedCategory === category.id
                        ? 'bg-primary-50 text-primary-600'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => onCategoryChange(category.id)}
                  >
                    <Check
                      size={16}
                      className={`mr-2 ${
                        selectedCategory === category.id
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                    <span>{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="relative group">
            <button className="btn btn-outline py-2">
              {selectedPrice
                ? priceRanges.find((p) => p.value === selectedPrice)?.label
                : 'All Prices'}
            </button>
            <div className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 w-56">
              <div className="space-y-1">
                <div
                  className={`flex items-center cursor-pointer p-2 rounded ${
                    selectedPrice === null
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => onPriceChange(null)}
                >
                  <Check
                    size={16}
                    className={`mr-2 ${
                      selectedPrice === null ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span>All Prices</span>
                </div>
                {priceRanges.map((range) => (
                  <div
                    key={range.id}
                    className={`flex items-center cursor-pointer p-2 rounded ${
                      selectedPrice === range.value
                        ? 'bg-primary-50 text-primary-600'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => onPriceChange(range.value)}
                  >
                    <Check
                      size={16}
                      className={`mr-2 ${
                        selectedPrice === range.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                    <span>{range.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filter Tags */}
          <div className="flex items-center space-x-2">
            {selectedCategory && (
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded text-sm">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <button
                  onClick={() => onCategoryChange(null)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                  aria-label="Remove category filter"
                >
                  <X size={12} />
                </button>
              </div>
            )}
            {selectedPrice && (
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded text-sm">
                {priceRanges.find((p) => p.value === selectedPrice)?.label}
                <button
                  onClick={() => onPriceChange(null)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                  aria-label="Remove price filter"
                >
                  <X size={12} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right - Sort */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;