import React from 'react';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Featured Products
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Premium Wireless Headphones"
            description="Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation and 30-hour battery life."
            price="₹299.99"
            imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
          />
          
          <ProductCard
            title="Smart Watch Series X"
            description="Stay connected with our latest smartwatch. Track your fitness, receive notifications, and monitor your health 24/7."
            price="₹399.99"
            imageUrl="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80"
          />
          
          <ProductCard
            title="Ultra-Slim Laptop"
            description="Powerful performance meets elegant design. Perfect for professionals and creatives on the go."
            price="₹1,299.99"
            imageUrl="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default App;