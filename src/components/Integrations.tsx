import React from 'react';
import { integrations } from '../constants';

const Integrations: React.FC = () => {
  return (
    <section 
      id="integraciones" 
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #6931D7 0%, #5727DC 100%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Funciona con tus apps favoritas
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Conecta fácilmente con las herramientas que ya usas e impulsa tu productividad.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-purple-800 shadow-xl transform transition-transform hover:scale-110 z-20">
              <img src={integrations[2].icon} alt={integrations[2].name} className="w-16 h-16 md:w-20 md:h-20" />
            </div>
          </div>

          {/* Connected Apps */}
          <div className="grid grid-cols-3 gap-8">
            {integrations.filter(app => app.id !== 3).map((app) => (
              <div key={app.id} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                  <img src={app.icon} alt={app.name} className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <span className="mt-2 text-white font-medium">{app.name}</span>
              </div>
            ))}
          </div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10" viewBox="0 0 400 300">
            <path
              d="M200,100 L100,200 M200,100 L200,200 M200,100 L300,200"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              className="animate-dash"
            />
          </svg>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white font-semibold mb-6">
            Y muchas más integraciones disponibles
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-cyan-300 text-purple-900 rounded-full text-lg font-semibold hover:from-cyan-300 hover:to-cyan-200 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Ver todas las integraciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;