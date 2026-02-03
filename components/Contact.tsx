
import React from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Facebook } from 'lucide-react';
import { CONTACT_INFO, COMPANY_NAME } from '../constants';
import Logo from './Logo';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-20 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Let's Talk Technology</h2>
              <h3 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-8">Ready to Start Your Digital Journey?</h3>
              <p className="text-slate-400 text-lg mb-12">Contact us today to discuss your next project. Our experts are ready to help you streamline your operations.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Location</h4>
                    <p className="text-slate-400">{CONTACT_INFO.location}</p>
                    <p className="text-slate-400">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Direct Call</h4>
                    {CONTACT_INFO.phones.map(phone => (
                      <p key={phone} className="text-slate-400">{phone}</p>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Support</h4>
                    {CONTACT_INFO.emails.map(email => (
                      <p key={email} className="text-slate-400">{email}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 outline-none">
                    <option>Custom Software Development</option>
                    <option>ERP Systems</option>
                    <option>Mobile App Project</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all outline-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
              <Logo size={32} className="text-slate-900" />
              <span className="font-outfit font-bold text-slate-900">{COMPANY_NAME}</span>
           </div>
           <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Codefront Consultancy LTD. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-cyan-500 transition-colors"><Facebook size={20} /></a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
