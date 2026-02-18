
import React from 'react';
import { useReveal } from '../hooks';
import { Newspaper as NewspaperIcon } from 'lucide-react';

const Newspaper: React.FC = () => {
    const { hasRevealed, domRef } = useReveal(0.05);

    return (
        <section id="newspaper" className="pb-24 px-4 sm:px-6 lg:px-8" ref={domRef}>
            <div className="max-w-7xl mx-auto">
                <div className={`text-center max-w-4xl mx-auto mb-12 reveal ${hasRevealed ? 'reveal-active' : ''}`}>
                    <div className="inline-flex items-center justify-center p-3 bg-cyan-100 text-cyan-600 rounded-2xl mb-6">
                        <NewspaperIcon size={32} />
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-outfit font-bold text-slate-900 mb-6">
                        The newspaper that shows up <span className="text-cyan-600 block sm:inline">before coffee ☕</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Stay updated with the latest insights and industry trends. Our daily briefing ensures you're always ahead of its curve.
                    </p>
                </div>

                <div className={`relative w-full max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-200/50 reveal ${hasRevealed ? 'reveal-active reveal-delay-2' : ''}`}>
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative bg-white">
                        <iframe
                            src="https://gamma.app/embed/8a80wb42khvqfdg"
                            className="absolute inset-0 w-full h-full border-0"
                            allow="fullscreen"
                            title="The Newspaper That Shows Up Before Coffee ☕"
                            style={{ border: 'none', background: 'transparent' }}
                        ></iframe>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8 bg-white border-t border-slate-50">
                        <div className="flex items-center gap-5 mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">
                                CF
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Codefront Daily Insight</p>
                                <p className="text-sm text-slate-500">Curated enterprise intelligence</p>
                            </div>
                        </div>
                        <a
                            href="https://gamma.app/embed/8a80wb42khvqfdg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-bold text-slate-900 transition-all flex items-center gap-2"
                        >
                            Open Interactive Mode
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newspaper;
