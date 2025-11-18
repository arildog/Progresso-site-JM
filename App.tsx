import React from 'react';
import Header from './components/Header';
import PhaseCard from './components/PhaseCard';
import Footer from './components/Footer';
import { PROJECT_PHASES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 selection:bg-ocre/20 selection:text-ocre">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 pb-12">
        
        <div className="max-w-4xl mx-auto">
          {/* Intro Section */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-floresta mb-4">
              Novo portal da Junta de Missões
            </h2>
            <p className="text-xl text-black-body/80 leading-relaxed max-w-2xl">
              Este portal servirá como o principal ponto de conexão para doadores, missionários e parceiros. Abaixo você encontra o status atual do desenvolvimento.
            </p>
          </div>

          {/* Progress Bar - Roughly 66% complete (2 out of 3 phases) */}
          <div className="mb-12 bg-white p-1 rounded-full shadow-sm border border-gray-100 flex items-center">
            <div className="flex-[2] h-3 bg-floresta rounded-full ml-1"></div>
            <div className="flex-1 h-3 bg-ocre/30 rounded-full mr-1 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-1/3 bg-ocre animate-pulse"></div>
            </div>
          </div>

          {/* Phases */}
          <div className="space-y-10">
            {PROJECT_PHASES.map((phase) => (
              <PhaseCard key={phase.id} phase={phase} />
            ))}
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default App;