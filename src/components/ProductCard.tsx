import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (!product.inStock) {
      toast.error('Producto agotado');
      return;
    }
    
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} agregado al carrito`);
    console.log('Product added to cart:', product.name);
  };

  const getCategoryBadge = (category: string) => {
    const badges = {
      whale: { text: 'Ballena', color: 'bg-blue-500' },
      dolphin: { text: 'Delfín', color: 'bg-cyan-500' },
      shark: { text: 'Tiburón', color: 'bg-gray-500' },
      turtle: { text: 'Tortuga', color: 'bg-green-500' },
      accessories: { text: 'Accesorio', color: 'bg-purple-500' }
    };
    
    const badge = badges[category as keyof typeof badges] || { text: category, color: 'bg-gray-500' };
    return (
      <span className={`${badge.color} text-white text-xs px-2 py-1 rounded-full`}>
        {badge.text}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2">
          {getCategoryBadge(product.category)}
        </div>
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Agotado</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};