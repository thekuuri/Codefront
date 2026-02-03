
import React from 'react';
import { Target, Lightbulb, Users2, Rocket, ShieldCheck, Globe } from 'lucide-react';
import { useReveal } from '../hooks';

const About: React.FC = () => {
  const { hasRevealed, domRef } = useReveal(0.05);
  
  const values = [
    { icon: Target, title: "Our Mission", desc: "Providing innovative and reliable IT solutions to businesses of all sizes." },
    { icon: Lightbulb, title: "Innovation", desc: "Continuously improving offerings to meet evolving client needs." },
    { icon: Users2, title: "Culture", desc: "Built on collaboration, innovation, and dedication to excellence." },
    { icon: Rocket, title: "Our Goal", desc: "Helping clients succeed by streamlining operations and driving growth." },
    { icon: ShieldCheck, title: "Reliability", desc: "Enterprise-grade uptime and robust security for every deployment." },
    { icon: Globe, title: "Global Reach", desc: "Serving multinational corporations across East Africa and beyond." }
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={domRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mb-20 reveal ${hasRevealed ? 'reveal-active' : ''}`}>
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">The Codefront Way</h2>
          <h3 className="text-4xl lg:text-6xl font-outfit font-bold text-slate-900 mb-8 leading-[1.1]">
            We Don't Just Build Software, <br/>
            <span className="text-slate-400">We Architect Success.</span>
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            Codefront Consultancy LTD is a specialized ICT firm. Since our inception in 2017, we have focused on deep technical implementation, training, and support for complex enterprise environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((item, i) => (
            <div 
              key={i} 
              className={`group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal ${hasRevealed ? `reveal-active reveal-delay-${(i % 3) + 1}` : ''}`}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 reveal ${hasRevealed ? 'reveal-active reveal-delay-3' : ''}`}>
           <div className="text-center md:text-left">
              <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-2">Experience Matters</p>
              <h4 className="text-3xl font-outfit font-bold italic">7+ Years of Enterprise Innovation</h4>
           </div>
           <div className="h-px md:h-12 w-full md:w-px bg-slate-800"></div>
           <div className="text-center md:text-left">
              <p className="text-slate-400 font-medium text-lg italic">"Dedicated to delivering quality software that solves real-world business problems."</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
