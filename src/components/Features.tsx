import React from 'react';
import { features } from '../constants';
import { BarChart4, Mail, FileText, Video, Instagram, BookText, Mic, Users, ArrowRight } from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'BarChart4': return <BarChart4 className="w-6 h-6" />;
    case 'Mail': return <Mail className="w-6 h-6" />;
    case 'FileText': return <FileText className="w-6 h-6" />;
    case 'Video': return <Video className="w-6 h-6" />;
    case 'Instagram': return <Instagram className="w-6 h-6" />;
    case 'BookText': return <BookText className="w-6 h-6" />;
    case 'Mic': return <Mic className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    default: return <BarChart4 className="w-6 h-6" />;
  }
};

const Features: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full">
            <span className="text-purple-900 font-semibold">Todo incluido en un solo pack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Automatizá tu negocio mientras dormís
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Cada automatización está diseñada para ahorrarte tiempo y multiplicar tus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {getIconComponent(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2 flex items-center gap-2">
                {feature.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-purple-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-lg font-bold hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            QUIERO TODAS LAS AUTOMATIZACIONES
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;