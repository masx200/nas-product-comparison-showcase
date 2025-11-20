import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ComparisonTable from './components/ComparisonTable';
import Summary from './components/Summary';
import { products } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <main id="products" className="bg-white">
        {/* Product Showcase Section */}
        <div className="py-12">
            <div className="text-center mb-12 pt-12">
                <h2 className="text-3xl font-bold text-slate-900">明星产品巡礼</h2>
                <div className="w-20 h-1 bg-brand-primary mx-auto mt-4 rounded-full"></div>
            </div>
            
            {products.map((product, index) => (
                <div key={product.id} className={index % 2 === 1 ? 'bg-slate-50/80' : 'bg-white'}>
                    <ProductCard 
                        product={product} 
                        isReversed={index % 2 === 1} 
                    />
                </div>
            ))}
        </div>

        <ComparisonTable />
        <Summary />
      </main>

      <footer className="bg-brand-dark text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
                 <span className="font-semibold text-yellow-400">NAS Review 2025</span>
            </div>
            <p className="text-slate-400 text-sm">
                © 2025 Tech Review. All rights reserved. <br/>
                Images sourced from provided presentation materials.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;