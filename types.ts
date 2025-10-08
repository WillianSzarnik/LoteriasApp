import type { LotteryId } from './constants';

export interface LotteryType {
  id: LotteryId;
  name: string;
  color: string;
}

export interface PrizeTier {
  description: string;
  winners: string;
  prize: string;
}

export interface DrawResult {
  lotteryType: LotteryId;
  contest: number;
  date: string;
  numbers: string[];
  accumulated: boolean;
  accumulatedValue: string;
  nextContestDate: string;
  nextContestEstimate: string;
  prizeTiers: PrizeTier[];
  // Campos especiais para loterias específicas
  clovers?: string[]; // para +Milionária
  secondDrawNumbers?: string[]; // para Dupla Sena
  team?: string; // para Timemania
  month?: string; // para Dia de Sorte
}
