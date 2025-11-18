import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Code2, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-floresta-light py-12 mt-12">
      <div className="container mx-auto px-4 md:px-6 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-heading font-bold text-xl text-floresta mb-4">Equipe Responsável</h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-2 text-black-body">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-areia" />
                  <span className="font-bold">{CONTACT_INFO.developerName}</span>
                </div>
                <span className="text-sm opacity-60 hidden md:inline">-</span>
                <span className="text-sm opacity-70">{CONTACT_INFO.developerRole}</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-2 text-black-body">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-areia" />
                  <span className="font-bold">{CONTACT_INFO.directorName}</span>
                </div>
                <span className="text-sm opacity-60 hidden md:inline">-</span>
                <span className="text-sm opacity-70">{CONTACT_INFO.directorRole}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
             <div className="bg-floresta-light/30 px-6 py-4 rounded-xl text-center md:text-right">
                <p className="font-heading font-bold text-black-title text-lg">
                  {CONTACT_INFO.agencyName}
                </p>
                <p className="text-sm text-black-body/70 mt-1 italic">
                  {CONTACT_INFO.agencySlogan}
                </p>
             </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-black-body/40 font-sans">
            &copy; 2025 Agência Promessista de Comunicação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;