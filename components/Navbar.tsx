
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-3 group">
              <div className={`transition-transform duration-300 group-hover:scale-110`}>
                <Logo size={42} className={scrolled ? 'text-cyan-500' : 'text-cyan-400'} />
              </div>
              <span className={`font-outfit font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                CODEFRONT
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-900 lg:text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-95"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-6 border-b border-slate-100' : 'max-h-0'}`}>
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-cyan-600 border-b border-slate-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
             <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-cyan-500 text-white px-5 py-3 rounded-xl text-base font-bold shadow-lg shadow-cyan-500/20"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
