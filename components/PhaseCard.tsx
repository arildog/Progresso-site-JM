import React from 'react';
import { Phase } from '../types';
import { CheckCircle2, Circle, Clock, ArrowRight } from 'lucide-react';

interface PhaseCardProps {
  phase: Phase;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase }) => {
  const isCompleted = phase.status === 'completed';

  return (
    <div className={`mb-8 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
      isCompleted 
        ? 'bg-white border-floresta/20 shadow-sm' 
        : 'bg-white border-ocre shadow-md transform scale-[1.01]'
    }`}>
      <div className={`p-6 md:p-8 border-b ${isCompleted ? 'bg-floresta-light/20 border-floresta/10' : 'bg-ocre-light/30 border-ocre/20'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
            isCompleted 
              ? 'bg-floresta text-white' 
              : 'bg-ocre text-white'
          }`}>
            {isCompleted ? 'Concluído' : 'Em Desenvolvimento'}
          </span>
          {isCompleted && <CheckCircle2 className="text-floresta w-6 h-6" />}
          {!isCompleted && <Clock className="text-ocre w-6 h-6 animate-pulse" />}
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-black-title mb-2">
          {phase.title}
        </h2>
        <p className="text-black-body/80 font-sans text-lg">
          {phase.description}
        </p>
      </div>

      <div className="p-6 md:p-8">
        <ul className="space-y-6">
          {phase.tasks.map((task) => (
            <li key={task.id} className="group flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                {task.status === 'completed' ? (
                  <div className="w-6 h-6 rounded-full bg-floresta/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-floresta" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-ocre/30 flex items-center justify-center group-hover:border-ocre transition-colors">
                    <Circle className="w-3 h-3 text-ocre/30 fill-current group-hover:text-ocre" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold font-heading mb-1 ${
                  task.status === 'completed' ? 'text-floresta line-through decoration-floresta/30 decoration-2' : 'text-black-title'
                }`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-black-body text-sm leading-relaxed font-sans">
                    {task.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
        
        {!isCompleted && (
          <div className="mt-8 p-4 bg-ocre-light/30 rounded-lg border border-ocre/20 flex items-center gap-3 text-ocre font-bold">
            <ArrowRight className="w-5 h-5" />
            <span>Foco atual da equipe de desenvolvimento</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhaseCard;
