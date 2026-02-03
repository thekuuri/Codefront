
import React from 'react';
import { SERVICES, iconMap } from '../constants';
import { useReveal } from '../hooks';

const Services: React.FC = () => {
  const { hasRevealed, domRef } = useReveal(0.1);

  return (
    <section id="services" className="py-24 bg-slate-50" ref={domRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${hasRevealed ? 'reveal-active' : ''}`}>
          <h2 className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-4">What We Do Best</h2>
          <h3 className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 mb-6">Innovative ICT Solutions Tailor-Made for You</h3>
          <p className="text-slate-600 text-lg">We specialize in technologies that boost operational efficiency and transform digital landscapes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-cyan-300 transition-all hover:shadow-xl hover:-translate-y-1 group reveal ${hasRevealed ? `reveal-active reveal-delay-${(i % 3) + 1}` : ''}`}
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <div className="h-1 w-12 bg-cyan-500 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
