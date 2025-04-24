import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-purple-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <span className="text-white font-bold text-xl">AutomateIA</span>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-purple-200 transition-colors">
              Inicio
            </a>
            <a href="#caracteristicas" className="text-white hover:text-purple-200 transition-colors">
              Características
            </a>
            <a href="#precios" className="text-white hover:text-purple-200 transition-colors">
              Precios
            </a>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-cyan-400 to-cyan-300 text-purple-900 px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Acceder Ahora
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-purple-900">
          <div className="px-4 py-5 space-y-4">
            <a 
              href="#inicio" 
              className="block text-white hover:text-purple-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#caracteristicas" 
              className="block text-white hover:text-purple-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#precios" 
              className="block text-white hover:text-purple-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </a>
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-cyan-400 to-cyan-300 text-purple-900 px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
            >
              Acceder Ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;