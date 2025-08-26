import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Waves } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartModal } from './CartModal';

export const Header = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-200" />
              <h1 className="text-2xl font-bold">AquaMarina</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-200 transition-colors">Inicio</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Ballenas</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Delfines</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Tiburones</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Accesorios</a>
            </nav>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-blue-800 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-blue-600 pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Inicio</a>
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Ballenas</a>
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Delfines</a>
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Tiburones</a>
                <a href="#" className="hover:text-blue-200 transition-colors py-2">Accesorios</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};