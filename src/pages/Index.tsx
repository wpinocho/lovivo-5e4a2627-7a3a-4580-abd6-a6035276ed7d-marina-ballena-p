import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { ProductFilters } from '../components/ProductFilters';
import { Footer } from '../components/Footer';
import { CartProvider } from '../context/CartContext';
import { products } from '../data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  console.log('Index component rendered with', products.length, 'products');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = products.filter(product => product.category === selectedCategory);
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    console.log('Filtered and sorted products:', sorted.length);
    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        
        <main className="container mx-auto px-4 py-12">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Nuestra Colección Marina
            </h2>
            <p className="text-gray-600">
              Descubre {filteredAndSortedProducts.length} productos únicos de vida marina
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;