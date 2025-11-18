import React from 'react';
import { LayoutDashboard } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black-title rounded-xl flex items-center justify-center text-white shadow-lg">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-2xl md:text-3xl text-black-title leading-none">
                Junta de Missões
              </h1>
              <p className="text-areia font-bold tracking-wide text-sm uppercase mt-1">
                Status do Projeto Web
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-sans text-black-body border-l-4 border-ocre pl-4">
            <div>
              <p className="font-bold">Relatório de Progresso</p>
              <p className="opacity-70">Atualizado: 18 novembro 2025</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;