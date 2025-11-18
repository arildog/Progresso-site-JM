import { Phase } from './types';

export const PROJECT_PHASES: Phase[] = [
  {
    id: 1,
    title: "Fase 1: Infraestrutura e Migração",
    description: "Configuração do ambiente e preservação do histórico de conteúdo.",
    status: 'completed',
    tasks: [
      {
        id: 'p1-1',
        title: 'Configuração de Domínio',
        description: 'Setup do subdomínio missoes.promessistas.org vinculado ao portal oficial.',
        status: 'completed'
      },
      {
        id: 'p1-2',
        title: 'Instalação da Plataforma',
        description: 'Configuração do ambiente de hospedagem e CMS base.',
        status: 'completed'
      },
      {
        id: 'p1-3',
        title: 'Migração de Notícias',
        description: 'Migração das notícias do site antigo (167 publicações).',
        status: 'completed'
      }
    ]
  },
  {
    id: 2,
    title: "Fase 2: Identidade e Estrutura",
    description: "Definição visual e construção da experiência do usuário.",
    status: 'completed',
    tasks: [
      {
        id: 'p2-1',
        title: 'Identidade Visual (UI/UX)',
        description: 'Aplicação da paleta de cores (Ocre, Floresta, Areia) e tipografia (Rubik/Karla).',
        status: 'completed'
      },
      {
        id: 'p2-2',
        title: 'Arquitetura Responsiva',
        description: 'Desenvolvimento de layouts adaptáveis para mobile e implementação de componentes base.',
        status: 'completed'
      },
      {
        id: 'p2-3',
        title: 'Estrutura da Home',
        description: 'Destaques de projetos, chamada para doações e mapa interativo.',
        status: 'completed'
      }
    ]
  },
  {
    id: 3,
    title: "Fase 3: Funcionalidades Finais",
    description: "Implementação de sistemas complexos e otimizações para lançamento.",
    status: 'active',
    tasks: [
      {
        id: 'p3-1',
        title: 'Sistema de Doações',
        description: 'Checkout para projetos específicos, recorrente (mensal), PIX e cartão.',
        status: 'pending'
      },
      {
        id: 'p3-2',
        title: 'Páginas Institucionais',
        description: 'História, Missão/Visão, Diretoria e Transparência.',
        status: 'pending'
      },
      {
        id: 'p3-3',
        title: 'Contato e Suporte',
        description: 'Formulários, integração com WhatsApp e mapas.',
        status: 'pending'
      },
      {
        id: 'p3-4',
        title: 'Extras e Otimização',
        description: 'Suporte a 3 idiomas (PT/EN/ES), SEO técnico e Analytics.',
        status: 'pending'
      }
    ]
  }
];

export const CONTACT_INFO = {
  developerName: "Arildo Gomes",
  developerRole: "Desenvolvedor, redator e designer",
  directorName: "Edmilson Mendes",
  directorRole: "Diretor da APC",
  agencyName: "Agência Promessista de Comunicação (APC)",
  agencySlogan: "Comunicação a serviço da missão"
};