
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyUs />
        <Contact />
      </main>
    </div>
  );
};

export default App;
