import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Vision } from './components/Vision';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

export default App;