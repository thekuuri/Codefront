
import React from 'react';
import { PRODUCTS } from '../constants';
import { 
  CheckCircle2, 
  Database, 
  Smartphone, 
  ShoppingBag, 
  ShieldAlert, 
  Calendar,
  ArrowRight,
  Monitor,
  Fingerprint
} from 'lucide-react';
import { useReveal } from '../hooks';

const productIcons: { [key: string]: any } = {
  'landmasters': Database,
  'biztrack': Smartphone,
  'canteen-management': Fingerprint,
  'lite-pos': ShoppingBag,
  'illicit-tracker': ShieldAlert,
  'leave-management': Calendar
};

const Products: React.FC = () => {
  const { hasRevealed, domRef } = useReveal(0.05);

  return (
    <section id="products" className="py-24 bg-white overflow-hidden" ref={domRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 reveal ${hasRevealed ? 'reveal-active' : ''}`}>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Enterprise Ecosystem</h2>
          <h3 className="text-4xl sm:text-5xl font-outfit font-bold text-slate-900 mb-6">Proven Software Products</h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our specialized platforms are built on modern stacks and deployed in high-stakes environments for multinational corporations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {PRODUCTS.map((product, i) => {
            const Icon = productIcons[product.id] || Monitor;
            return (
              <div 
                key={product.id} 
                className={`flex flex-col bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-cyan-200 transition-all hover:shadow-2xl hover:shadow-cyan-900/5 group reveal ${hasRevealed ? `reveal-active reveal-delay-${(i % 2) + 1}` : ''}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm border border-slate-100 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                    <Icon size={32} />
                  </div>
                  <div className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {product.platform}
                  </div>
                </div>

                <div className="mb-6">
                  {product.client && (
                    <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-2 block">
                      Deployed: {product.client}
                    </span>
                  )}
                  <h4 className="text-3xl font-outfit font-bold text-slate-900 mb-4">{product.name}</h4>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-200/60">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a href="#contact" className="inline-flex items-center gap-2 text-slate-900 font-bold group/btn">
                    Inquire for Implementation
                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-cyan-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={`mt-16 text-center reveal ${hasRevealed ? 'reveal-active reveal-delay-3' : ''}`}>
           <div className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm">
             <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
             Custom Development Available for All Products
           </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
