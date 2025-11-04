import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      <header className="fixed left-0 right-0 top-0 z-20 border-b border-amber-400/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-widest bg-gradient-to-b from-amber-200 to-yellow-500 bg-clip-text text-transparent">SHINE</span>
            <span className="hidden text-xs text-amber-200/70 sm:inline">Studio & Typing Centre</span>
          </a>
          <nav className="hidden gap-6 text-sm text-amber-100/80 sm:flex">
            <a href="#services" className="hover:text-amber-100">Services</a>
            <a href="#about" className="hover:text-amber-100">About</a>
            <a href="#contact" className="rounded-md border border-amber-400/30 px-3 py-1.5 text-amber-200 hover:border-amber-300 hover:text-amber-100">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
