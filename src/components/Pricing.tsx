import React from 'react';
import { Check, BookOpen, Zap, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-purple-700 text-white transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-300 py-2">
              <p className="text-center font-bold text-purple-900">
                ¡OFERTA ESPECIAL! - 50% DE DESCUENTO
              </p>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="w-12 h-12 text-cyan-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Pack Completo + Manual Detallado</h3>
              <p className="text-center text-purple-200 mb-6">Todo lo que necesitás para automatizar tu negocio</p>
              
              <div className="flex items-baseline justify-center mb-8">
                <span className="text-sm line-through opacity-75">$49.99 USD</span>
                <span className="text-6xl font-bold mx-2">$24.99</span>
                <span className="text-xl opacity-80">USD</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg">
                  <Zap className="w-6 h-6 text-cyan-300 mb-2" />
                  <span className="text-sm">Acceso Inmediato</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-white/10 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-300 mb-2" />
                  <span className="text-sm">Ahorra 40h/mes</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-cyan-300" />
                  <span>+10 automatizaciones listas para implementar hoy mismo</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-cyan-300" />
                  <span>Manual paso a paso detallado</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-cyan-300" />
                  <span>Actualizaciones y mejoras de por vida</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-cyan-300" />
                  <span>Compatible con WhatsApp, Gmail, Instagram y más</span>
                </li>
              </ul>
              
              <a 
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full py-4 rounded-full font-bold text-lg bg-gradient-to-r from-cyan-400 to-cyan-300 text-purple-900 hover:opacity-90 transition-all duration-300 mb-4 relative overflow-hidden text-center"
              >
                <span className="relative z-10">¡QUIERO AUTOMATIZAR MI NEGOCIO AHORA!</span>
                <div className="absolute inset-0 bg-white/25 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              
              <p className="text-center text-sm">
                <span className="text-cyan-300">★★★★★</span> Valoración 4.9/5 de +1000 clientes satisfechos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;