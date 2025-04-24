import React from 'react';

const CTA: React.FC = () => {
  return (
    <section 
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #5825DC 0%, #7B3CE9 100%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simplificá tu negocio hoy mismo
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Únete a miles de empresas que ya han automatizado sus procesos y ahorran tiempo cada día.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-300 text-purple-900 rounded-full text-xl font-bold hover:from-cyan-300 hover:to-cyan-200 transform hover:scale-105 transition-all duration-300 shadow-lg">
              ACCEDÉ AL PACK AHORA
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-xl font-medium hover:bg-white/20 transition-all duration-300">
              Programa una demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;