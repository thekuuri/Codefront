
import React from 'react';
import { ChevronRight, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-semibold mb-8 backdrop-blur-sm">
          <Sparkles size={16} className="mr-2" /> {TAGLINE}
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-outfit font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
          Engineering the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Future of Business.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Since 2017, we've been the silent engine behind blue-chip giants, delivering custom software, high-performance mobile apps, and robust ERP solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#products" className="inline-flex items-center justify-center px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-cyan-500/20 active:scale-95">
            Our Solutions <ChevronRight className="ml-2" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-2xl text-lg font-semibold transition-all backdrop-blur-sm active:scale-95">
            Book a Consultation <Terminal className="ml-2" size={20} />
          </a>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="text-white font-black text-xl tracking-tighter italic">BAT KENYA</div>
          <div className="text-white font-black text-xl tracking-tighter italic">BAT UGANDA</div>
          <div className="text-white font-black text-xl tracking-tighter italic">BAT SOMALIA</div>
          <div className="text-white font-black text-xl tracking-tighter italic">BLUE-CHIP PARTNER</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
