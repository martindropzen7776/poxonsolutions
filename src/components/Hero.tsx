import React from 'react';
import { Zap, Clock, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        background: 'linear-gradient(135deg, #5825DC 0%, #7B3CE9 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
            <span className="text-cyan-300 font-semibold">¡Oferta por tiempo limitado!</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AUTOMATIZA TU NEGOCIO<br />
            <span className="text-cyan-300">EN MINUTOS</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-purple-100 mb-8">
            Pack completo de <span className="font-bold text-cyan-300">+50GPTS +10 automatizaciones</span> que harán crecer tu negocio mientras dormís
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white">
              <Zap className="w-6 h-6 text-cyan-300" />
              <span>Implementación inmediata</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <Clock className="w-6 h-6 text-cyan-300" />
              <span>Ahorra 40+ horas/mes</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-300 text-purple-900 rounded-full text-xl font-bold hover:from-cyan-300 hover:to-cyan-200 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">ACCEDÉ AL PACK AHORA</span>
              <div className="absolute inset-0 bg-white/25 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <div className="text-white text-sm">
              <span className="line-through">$49.99 USD</span>
              <span className="ml-2 text-cyan-300 font-bold">$24.99 USD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
