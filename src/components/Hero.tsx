import React from 'react';
import { Waves, Star, Shield, Truck } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Waves className="h-16 w-16 text-blue-200" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Descubre el Mundo
            <span className="block text-cyan-300">Marino</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Colecciones únicas de ballenas, delfines y vida marina. 
            Productos artesanales que celebran la belleza del océano.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explorar Colección
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-blue-800 bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
            <p className="text-blue-200">Productos artesanales de la más alta calidad</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800 bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-blue-200">Comprometidos con la conservación marina</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800 bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Envío Gratis</h3>
            <p className="text-blue-200">Envío gratuito en compras superiores a $50</p>
          </div>
        </div>
      </div>
    </div>
  );
};