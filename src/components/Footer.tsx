import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 text-purple-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AutomateIA</h3>
            <p className="opacity-80">
              Simplificamos la automatización de procesos digitales para que puedas enfocarte en hacer crecer tu negocio.
            </p>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-2">
              <a href="mailto:info@automateia.com" className="hover:text-cyan-300 transition-colors flex items-center justify-end gap-2">
                <span>info@automateia.com</span>
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+1234567890" className="hover:text-cyan-300 transition-colors flex items-center justify-end gap-2">
                <span>+1 (234) 567-890</span>
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-800 mt-8 pt-8 text-center">
          <p className="opacity-80 text-sm">
            &copy; {new Date().getFullYear()} AutomateIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;