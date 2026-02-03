
import React from 'react';
import { WHY_US } from '../constants';
import { useReveal } from '../hooks';

const WhyUs: React.FC = () => {
  const { hasRevealed, domRef } = useReveal(0.1);

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative" ref={domRef}>
      {/* Decorative SVG Pattern */}
      <svg className="absolute top-0 right-0 opacity-[0.05] pointer-events-none" width="400" height="400" viewBox="0 0 100 100" fill="none">
        <circle cx="100" cy="0" r="80" stroke="white" strokeWidth="0.5" />
        <circle cx="100" cy="0" r="60" stroke="white" strokeWidth="0.5" />
        <circle cx="100" cy="0" r="40" stroke="white" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-20 reveal ${hasRevealed ? 'reveal-active' : ''}`}>
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">The Competitive Edge</h2>
          <h3 className="text-4xl sm:text-6xl font-outfit font-bold text-white mb-6">Built for High Stakes</h3>
          <p className="text-slate-400 text-xl leading-relaxed">
            Multinational companies trust us because we understand that technology is more than just code—it's business continuity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {WHY_US.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group reveal ${hasRevealed ? `reveal-active reveal-delay-${(index % 3) + 1}` : ''}`}
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div id="tech" className={`mt-28 pt-24 border-t border-white/10 text-center reveal ${hasRevealed ? 'reveal-active reveal-delay-3' : ''}`}>
           <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-16">Enterprise Core Stack</p>
           <div className="flex flex-wrap justify-center gap-12 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <span className="text-white font-extrabold text-2xl tracking-tighter">AZURE</span>
              <span className="text-white font-extrabold text-2xl tracking-tighter">AWS</span>
              <span className="text-white font-extrabold text-2xl tracking-tighter">LINUX</span>
              <span className="text-white font-extrabold text-2xl tracking-tighter">POWER BI</span>
              <span className="text-white font-extrabold text-2xl tracking-tighter">SHAREPOINT</span>
              <span className="text-white font-extrabold text-2xl tracking-tighter">KAFKA</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
