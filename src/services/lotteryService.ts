import type { DrawResult } from '../types';
import { LOTTERY_IDS, LotteryId } from '../constants';

const mockData: Record<LotteryId, Record<string, DrawResult>> = {
  [LOTTERY_IDS.MEGA_SENA]: {
    '2735': {
      lotteryType: LOTTERY_IDS.MEGA_SENA,
      contest: 2735,
      date: '11/06/2024',
      numbers: ['05', '33', '46', '47', '53', '59'],
      accumulated: false,
      accumulatedValue: 'R$ 0,00',
      nextContestDate: '13/06/2024',
      nextContestEstimate: 'R$ 40.000.000,00',
      prizeTiers: [
        { description: 'Sena (6 acertos)', winners: '1 aposta ganhadora', prize: 'R$ 114.104.458,33' },
        { description: 'Quina (5 acertos)', winners: '137 apostas ganhadoras', prize: 'R$ 49.487,39' },
        { description: 'Quadra (4 acertos)', winners: '7.829 apostas ganhadoras', prize: 'R$ 1.239,31' },
      ],
    },
    '2734': {
      lotteryType: LOTTERY_IDS.MEGA_SENA,
      contest: 2734,
      date: '08/06/2024',
      numbers: ['21', '27', '35', '48', '59', '60'],
      accumulated: true,
      accumulatedValue: 'R$ 114.104.458,33',
      nextContestDate: '11/06/2024',
      nextContestEstimate: 'R$ 112.000.000,00',
      prizeTiers: [
        { description: 'Sena (6 acertos)', winners: 'Não houve ganhadores', prize: 'R$ 0,00' },
        { description: 'Quina (5 acertos)', winners: '117 apostas ganhadoras', prize: 'R$ 45.747,54' },
        { description: 'Quadra (4 acertos)', winners: '7.450 apostas ganhadoras', prize: 'R$ 1.021,57' },
      ],
    },
  },
  [LOTTERY_IDS.QUINA]: {
    '6462': {
      lotteryType: LOTTERY_IDS.QUINA,
      contest: 6462,
      date: '10/06/2024',
      numbers: ['05', '12', '35', '61', '76'],
      accumulated: false,
      accumulatedValue: 'R$ 0,00',
      nextContestDate: '11/06/2024',
      nextContestEstimate: 'R$ 700.000,00',
      prizeTiers: [
        { description: 'Quina (5 acertos)', winners: '1 aposta ganhadora', prize: 'R$ 1.548.742,00' },
        { description: 'Quadra (4 acertos)', winners: '43 apostas ganhadoras', prize: 'R$ 9.171,99' },
        { description: 'Terno (3 acertos)', winners: '3.384 apostas ganhadoras', prize: 'R$ 111,04' },
      ],
    },
  },
  [LOTTERY_IDS.LOTO_FACIL]: {
    '3126': {
      lotteryType: LOTTERY_IDS.LOTO_FACIL,
      contest: 3126,
      date: '10/06/2024',
      numbers: ['01', '03', '04', '05', '07', '09', '10', '11', '13', '15', '16', '17', '21', '22', '24'],
      accumulated: false,
      accumulatedValue: 'R$ 0,00',
      nextContestDate: '11/06/2024',
      nextContestEstimate: 'R$ 1.700.000,00',
      prizeTiers: [
        { description: '15 acertos', winners: '2 apostas ganhadoras', prize: 'R$ 673.801,90' },
        { description: '14 acertos', winners: '232 apostas ganhadoras', prize: 'R$ 1.834,16' },
        { description: '13 acertos', winners: '8.136 apostas ganhadoras', prize: 'R$ 30,00' },
      ],
    },
  },
  [LOTTERY_IDS.LOTO_MANIA]: {
    '2632': {
      lotteryType: LOTTERY_IDS.LOTO_MANIA,
      contest: 2632,
      date: '10/06/2024',
      numbers: ['02', '03', '04', '05', '14', '20', '26', '29', '34', '41', '44', '46', '50', '63', '69', '73', '81', '90', '91', '92'],
      accumulated: false,
      accumulatedValue: 'R$ 0,00',
      nextContestDate: '12/06/2024',
      nextContestEstimate: 'R$ 500.000,00',
      prizeTiers: [
        { description: '20 acertos', winners: '1 aposta ganhadora', prize: 'R$ 1.554.498,39' },
        { description: '19 acertos', winners: '3 apostas ganhadoras', prize: 'R$ 49.743,95' },
        { description: '0 acertos', winners: 'Não houve ganhadores', prize: 'R$ 0,00' },
      ],
    },
  },
  [LOTTERY_IDS.MAIS_MILIONARIA]: {
    '154': {
        lotteryType: LOTTERY_IDS.MAIS_MILIONARIA,
        contest: 154,
        date: '12/06/2024',
        numbers: ['01', '11', '12', '22', '30', '43'],
        clovers: ['02', '03'],
        accumulated: true,
        accumulatedValue: 'R$ 222.000.000,00',
        nextContestDate: '15/06/2024',
        nextContestEstimate: 'R$ 224.000.000,00',
        prizeTiers: [
            { description: '6 acertos + 2 trevos', winners: 'Não houve acertador', prize: 'R$ 0,00' },
            { description: '6 acertos + 1 ou 0 trevo', winners: 'Não houve acertador', prize: 'R$ 0,00' },
            { description: '5 acertos + 2 trevos', winners: '1 aposta ganhadora', prize: 'R$ 459.432,28' },
        ],
    },
  },
  [LOTTERY_IDS.DUPLA_SENA]: {
    '2674': {
        lotteryType: LOTTERY_IDS.DUPLA_SENA,
        contest: 2674,
        date: '11/06/2024',
        numbers: ['08', '16', '20', '30', '32', '38'],
        secondDrawNumbers: ['03', '04', '28', '33', '42', '49'],
        accumulated: true,
        accumulatedValue: 'R$ 3.738.995,95',
        nextContestDate: '13/06/2024',
        nextContestEstimate: 'R$ 4.000.000,00',
        prizeTiers: [
            { description: 'Sena (1º Sorteio)', winners: 'Não houve ganhadores', prize: 'R$ 0,00' },
            { description: 'Quina (1º Sorteio)', winners: '18 apostas ganhadoras', prize: 'R$ 5.758,26' },
            { description: 'Sena (2º Sorteio)', winners: 'Não houve ganhadores', prize: 'R$ 0,00' },
            { description: 'Quina (2º Sorteio)', winners: '21 apostas ganhadoras', prize: 'R$ 4.394,10' },
        ],
    },
  },
  [LOTTERY_IDS.TIMEMANIA]: {
    '2103': {
        lotteryType: LOTTERY_IDS.TIMEMANIA,
        contest: 2103,
        date: '11/06/2024',
        numbers: ['04', '05', '09', '31', '51', '54', '63'],
        team: 'FLAMENGO/RJ',
        accumulated: true,
        accumulatedValue: 'R$ 4.582.012,23',
        nextContestDate: '13/06/2024',
        nextContestEstimate: 'R$ 4.800.000,00',
        prizeTiers: [
            { description: '7 acertos', winners: 'Não houve ganhadores', prize: 'R$ 0,00' },
            { description: '6 acertos', winners: '2 apostas ganhadoras', prize: 'R$ 51.583,99' },
            { description: 'Time do Coração', winners: '5.204 apostas ganhadoras', prize: 'R$ 8,50' },
        ],
    },
  },
  [LOTTERY_IDS.DIA_DE_SORTE]: {
    '924': {
        lotteryType: LOTTERY_IDS.DIA_DE_SORTE,
        contest: 924,
        date: '11/06/2024',
        numbers: ['02', '03', '11', '12', '13', '19', '29'],
        month: 'Setembro',
        accumulated: false,
        accumulatedValue: 'R$ 0,00',
        nextContestDate: '13/06/2024',
        nextContestEstimate: 'R$ 150.000,00',
        prizeTiers: [
            { description: '7 acertos', winners: '1 aposta ganhadora', prize: 'R$ 159.049,15' },
            { description: '6 acertos', winners: '50 apostas ganhadoras', prize: 'R$ 1.839,18' },
            { description: 'Mês da Sorte', winners: '26.853 apostas ganhadoras', prize: 'R$ 5,00' },
        ],
    },
  },
  [LOTTERY_IDS.SUPER_SETE]: {
    '555': {
        lotteryType: LOTTERY_IDS.SUPER_SETE,
        contest: 555,
        date: '10/06/2024',
        numbers: ['9', '8', '8', '8', '3', '7', '8'],
        accumulated: true,
        accumulatedValue: 'R$ 965.736,88',
        nextContestDate: '12/06/2024',
        nextContestEstimate: 'R$ 1.000.000,00',
        prizeTiers: [
            { description: '7 acertos', winners: 'Não houve ganhadores', prize: 'R$ 0,00' },
            { description: '6 acertos', winners: '1 aposta ganhadora', prize: 'R$ 22.846,54' },
            { description: '5 acertos', winners: '31 apostas ganhadoras', prize: 'R$ 998,32' },
        ],
    },
  },
  [LOTTERY_IDS.LOTERIA_FEDERAL]: {
    '05874': {
        lotteryType: LOTTERY_IDS.LOTERIA_FEDERAL,
        contest: 5874,
        date: '12/06/2024',
        numbers: [], // Os números estão nos tiers de premiação para este tipo
        accumulated: false,
        accumulatedValue: 'R$ 0,00',
        nextContestDate: '15/06/2024',
        nextContestEstimate: 'R$ 500.000,00',
        prizeTiers: [
            { description: '1º Prêmio', winners: '058443', prize: 'R$ 500.000,00' },
            { description: '2º Prêmio', winners: '015116', prize: 'R$ 27.000,00' },
            { description: '3º Prêmio', winners: '085934', prize: 'R$ 24.000,00' },
            { description: '4º Prêmio', winners: '048809', prize: 'R$ 19.000,00' },
            { description: '5º Prêmio', winners: '028569', prize: 'R$ 18.329,00' },
        ],
    },
  }
};

const getLatestContest = (lotteryId: LotteryId): string => {
    const contests = Object.keys(mockData[lotteryId]);
    return contests.reduce((a, b) => (parseInt(a) > parseInt(b) ? a : b));
}

export const fetchLotteryResult = (lotteryId: LotteryId, contestNumber: string): Promise<DrawResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const contestToFetch = contestNumber === '' ? getLatestContest(lotteryId) : contestNumber;
      const lotteryResults = mockData[lotteryId];
      if (lotteryResults && lotteryResults[contestToFetch]) {
        resolve(lotteryResults[contestToFetch]);
      } else {
        reject(new Error('Concurso não encontrado. Por favor, verifique o número e tente novamente.'));
      }
    }, 500 + Math.random() * 500); // Simula atraso da rede
  });
};