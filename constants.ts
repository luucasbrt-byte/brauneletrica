import { ServiceItem } from './types';

export const PHONE_NUMBER = "34884561";
export const ADDRESS_STREET = "R. Bernardino Timóteo da Fonseca, 196";
export const ADDRESS_CITY = "Gravataí, RS";
export const ADDRESS_ZIP = "94190-110";

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: '1',
    title: 'Injeção Eletrônica',
    description: 'Diagnóstico computadorizado e reparo em sistemas de injeção para otimizar o desempenho e economia.',
    iconName: 'Zap'
  },
  {
    id: '2',
    title: 'Troca de Óleo',
    description: 'Lubrificantes de alta performance e troca de filtros para garantir a longevidade do motor.',
    iconName: 'Droplet'
  },
  {
    id: '3',
    title: 'Ar Condicionado',
    description: 'Manutenção, carga de gás e higienização completa para o seu conforto térmico.',
    iconName: 'Snowflake'
  },
  {
    id: '4',
    title: 'Som e Multimídia',
    description: 'Instalação de sons, centrais multimídia e upgrades no sistema de áudio.',
    iconName: 'Speaker'
  },
  {
    id: '5',
    title: 'Alarmes e Segurança',
    description: 'Instalação e manutenção de alarmes, travas elétricas e sensores de estacionamento.',
    iconName: 'Shield'
  },
  {
    id: '6',
    title: 'Revisão Preventiva',
    description: 'Check-up completo dos itens de segurança e elétrica para você viajar tranquilo.',
    iconName: 'Wrench'
  }
];