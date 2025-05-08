import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image?: string;
  count?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, count }) => {
  // Default image if none is provided
  const backgroundImage = image || 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg';
  
  return (
    <Link
      to={`/shop?category=${id}`}
      className="relative rounded-lg overflow-hidden group h-48 block"
    >
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-medium">{name}</h3>
        {count !== undefined && (
          <p className="text-sm opacity-80 mt-1">{count} products</p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;