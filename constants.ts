import type { LotteryType } from './types';

export const LOTTERY_IDS = {
  MEGA_SENA: 'MEGA-SENA',
  MAIS_MILIONARIA: '+MILIONÁRIA',
  LOTO_FACIL: 'LOTO-FACIL',
  QUINA: 'QUINA',
  LOTO_MANIA: 'LOTO-MANIA',
  DUPLA_SENA: 'DUPLA-SENA',
  TIMEMANIA: 'TIMEMANIA',
  DIA_DE_SORTE: 'DIA-DE-SORTE',
  SUPER_SETE: 'SUPER-SETE',
  LOTERIA_FEDERAL: 'LOTERIA-FEDERAL',
} as const;

export type LotteryId = typeof LOTTERY_IDS[keyof typeof LOTTERY_IDS];

export const LOTTERIES: LotteryType[] = [
  { id: LOTTERY_IDS.MEGA_SENA, name: 'Mega-Sena', color: '#209869' },
  { id: LOTTERY_IDS.QUINA, name: 'Quina', color: '#260085' },
  { id: LOTTERY_IDS.LOTO_FACIL, name: 'Loto Fácil', color: '#930089' },
  { id: LOTTERY_IDS.LOTO_MANIA, name: 'Loto Mania', color: '#F78100' },
  { id: LOTTERY_IDS.MAIS_MILIONARIA, name: '+Milionária', color: '#005AAE' },
  { id: LOTTERY_IDS.DUPLA_SENA, name: 'Dupla Sena', color: '#AF194E' },
  { id: LOTTERY_IDS.TIMEMANIA, name: 'Timemania', color: '#00A348' },
  { id: LOTTERY_IDS.DIA_DE_SORTE, name: 'Dia de Sorte', color: '#FFAB00' },
  { id: LOTTERY_IDS.SUPER_SETE, name: 'Super Sete', color: '#0066A1' },
  { id: LOTTERY_IDS.LOTERIA_FEDERAL, name: 'Federal', color: '#0092B2' },
];