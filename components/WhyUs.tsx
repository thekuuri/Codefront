
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
        <div className={`text-center max-w-4xl mx-auto mb-24 reveal ${hasRevealed ? 'reveal-active' : ''}`}>
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">The Competitive Edge</h2>
          <h3 className="text-4xl sm:text-6xl font-outfit font-bold text-white mb-8">Built for High Stakes</h3>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed text-justify md:text-center">
            <p>
              At Codefront Consultancy, we don't just build software; we engineer resilience. In an era where digital infrastructure is the backbone of global commerce, we have positioned ourselves as the definitive "Software Masters" for organizations that cannot afford a single minute of downtime. Our approach merges world-class engineering standards with a deep understanding of the unique operational landscapes across Kenya and the wider East African market.
            </p>
            <p>
              Our reputation is built on delivering high-performance platforms for blue-chip companies, where security, scalability, and seamless integration are non-negotiable. Whether it's optimizing field force activities for multinational brands or digitizing complex real-estate ecosystems, we provide the technical sophistication required to transform ambitious business strategies into tangible digital reality.
            </p>
            <p>
              We pride ourselves on a culture of excellence and long-term partnership. By leveraging the latest in cloud computing, biometric security, and data analytics, we empower our clients to stay ahead of the curve. Choosing Codefront means choosing a dedicated team that treats your business continuity as our highest priority, ensuring your technology grows as fast as your vision.
            </p>
          </div>
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
          <p className="text-cyan-500 font-bold uppercase tracking-[0.4em] text-xs mb-16 px-4">Enterprise Grade Infrastructure</p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 px-4 overflow-hidden">
            {/* Azure */}
            <div className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
              <img src="https://cdn.simpleicons.org/microsoftazure" alt="Microsoft Azure" className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Azure</span>
            </div>

            {/* AWS */}
            <div className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
              <img src="https://cdn.simpleicons.org/amazonservices" alt="AWS" className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">AWS</span>
            </div>

            {/* Ubuntu/Linux */}
            <div className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
              <img src="https://cdn.simpleicons.org/ubuntu" alt="Ubuntu" className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ubuntu</span>
            </div>

            {/* Power BI */}
            <div className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
              <img src="https://cdn.simpleicons.org/powerbi" alt="Power BI" className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Power BI</span>
            </div>

            {/* SharePoint */}
            <div className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
              <img src="https://cdn.simpleicons.org/microsoftsharepoint" alt="SharePoint" className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">SharePoint</span>
            </div>

            {/* Red Hat */}
            <div className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
              <img src="https://cdn.simpleicons.org/redhat" alt="Red Hat" className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Red Hat</span>
            </div>

            {/* Docker */}
            <div className="group flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2">
              <img src="https://cdn.simpleicons.org/docker" alt="Docker" className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
