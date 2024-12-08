import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ title, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-xl shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48 sm:h-64">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-900">{price}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
          <ShoppingCart className="w-5 h-5" />
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
}