import React from 'react';
import type { DrawResult } from '../types';
import { LOTTERIES, LOTTERY_IDS } from '../constants';
import { PrizeIcon, CalendarIcon, ArrowRightCircleIcon, SoccerBallIcon, MonthIcon, CloversIcon, ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

interface ResultCardProps {
  result: DrawResult;
  color: string;
  onPrevious: () => void;
  onNext: () => void;
}

const SpecialInfoCard: React.FC<{ icon: React.ReactNode; title: string; value: string; color: string }> = ({ icon, title, value, color }) => (
  <div className="items-center my-6 p-4 bg-slate-50 rounded-lg border border-slate-200 text-center w-full">
    <div className="flex flex-row justify-center items-center gap-2 text-slate-500 mb-2">{icon} <span className="font-semibold text-slate-500">{title}</span></div>
    <p className="text-2xl font-bold" style={{ color }}>{value}</p>
  </div>
);

const ResultCard: React.FC<ResultCardProps> = ({ result, color, onPrevious, onNext }) => {
  const lotteryInfo = LOTTERIES.find(l => l.id === result.lotteryType);

  const renderNumbers = (numbers: string[], isSuperSete = false) => (
    <div className={`flex flex-row flex-wrap justify-center gap-3 my-6 ${isSuperSete ? 'items-start' : 'items-center'}`}>
      {numbers.map((num, index) => (
        <div key={index} className="items-center text-center">
            {isSuperSete && <span className="text-xs font-semibold text-slate-400 mb-1 block">Coluna {index + 1}</span>}
            <div 
              className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center shadow-sm"
            >
              <span className="text-xl font-bold text-slate-700">{num}</span>
            </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200" style={{ borderTopColor: color, borderTopWidth: 4 }}>
      <div className="p-6 items-center text-center">
        <h2 className="text-3xl font-bold" style={{ color }}>{lotteryInfo?.name}</h2>
        
        <div className="flex flex-row items-center justify-center gap-2 mt-2">
            <button
                onClick={onPrevious}
                disabled={result.contest <= 1}
                className={`p-2 rounded-full ${result.contest <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-200'}`}
                aria-label="Concurso Anterior"
            >
                <ChevronLeftIcon color="#64748b" />
            </button>
            <span className="font-semibold text-slate-600 text-lg">Concurso {result.contest}</span>
             <button
                onClick={onNext}
                className="p-2 rounded-full hover:bg-slate-200"
                aria-label="Próximo Concurso"
            >
                <ChevronRightIcon color="#64748b" />
            </button>
        </div>

        <div className="flex flex-row items-center justify-center text-slate-500 text-sm mt-4">
            <CalendarIcon color="#64748b" size={16} />
            <span className="ml-2 text-slate-500">{result.date}</span>
        </div>
        
        {result.lotteryType === LOTTERY_IDS.LOTERIA_FEDERAL ? (
            <div className="my-6 w-full">
                <p className="text-center font-semibold text-slate-600 mb-3 text-lg">Bilhetes Premiados</p>
                <div className="space-y-2">
                    {result.prizeTiers.slice(0, 5).map((tier, index) => (
                        <div key={index} className="flex flex-row items-center p-3 bg-slate-50 rounded-lg justify-between">
                            <span className="font-medium text-slate-500">{index + 1}º Prêmio</span>
                            <span className="font-bold text-xl text-slate-800">{tier.winners}</span>
                            <span className="font-semibold text-slate-600">{tier.prize}</span>
                        </div>
                    ))}
                </div>
            </div>
        ) : result.lotteryType === LOTTERY_IDS.DUPLA_SENA ? (
            <>
                <p className="text-center font-semibold text-slate-600 mt-6 mb-2">1º Sorteio</p>
                {renderNumbers(result.numbers)}
                <p className="text-center font-semibold text-slate-600 mt-6 mb-2">2º Sorteio</p>
                {result.secondDrawNumbers && renderNumbers(result.secondDrawNumbers)}
            </>
        ) : (
            renderNumbers(result.numbers, result.lotteryType === LOTTERY_IDS.SUPER_SETE)
        )}

        {result.clovers && (
          <SpecialInfoCard icon={<CloversIcon color="#64748b" />} title="Trevos da Sorte" value={result.clovers.join(' - ')} color={color} />
        )}
        {result.team && (
            <SpecialInfoCard icon={<SoccerBallIcon color="#64748b" />} title="Time do Coração" value={result.team} color={color} />
        )}
        {result.month && (
            <SpecialInfoCard icon={<MonthIcon color="#64748b" />} title="Mês da Sorte" value={result.month} color={color} />
        )}

        {result.accumulated ? (
          <div className="items-center my-6 p-4 bg-yellow-100 rounded-lg border border-yellow-200 w-full">
            <p className="text-lg font-bold text-yellow-800">ACUMULOU!</p>
            <p className="text-slate-600">Valor acumulado: <span className="font-bold">{result.accumulatedValue}</span></p>
          </div>
        ) : (
           <div className="items-center my-6 p-4 bg-green-100 rounded-lg border border-green-200 w-full">
            <p className="text-lg font-bold text-green-800">HOUVE GANHADORES!</p>
          </div>
        )}
      </div>

      <div className="bg-white px-6 py-4 border-t border-slate-100">
        <div className="flex flex-row text-lg font-semibold mb-3 items-center text-slate-700">
            <PrizeIcon color="#334155" />
            <h3 className="ml-2 font-semibold text-slate-700 text-lg">Premiação</h3>
        </div>
        <div className="space-y-2">
          {result.prizeTiers.map((tier, index) => (
            <div key={index} className="flex flex-row gap-2 p-2 rounded-md bg-slate-50 justify-between">
              <span className="text-slate-700 text-sm w-[45%]">{tier.description}</span>
              <span className="text-slate-500 text-center text-sm w-[25%]">{tier.winners}</span>
              <span className="font-semibold text-slate-800 text-right text-sm w-[30%]">{tier.prize}</span>
            </div>
          ))}
        </div>
      </div>

       <div className="bg-slate-50 px-6 py-4">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
                <ArrowRightCircleIcon color="#64748b" />
                <span className="ml-2 text-slate-500 text-sm">Próximo Sorteio: {result.nextContestDate}</span>
            </div>
            <div className="items-end text-right">
                <span className="text-slate-500 text-sm">Estimativa</span>
                <p className="font-bold text-lg" style={{ color }}>{result.nextContestEstimate}</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ResultCard;