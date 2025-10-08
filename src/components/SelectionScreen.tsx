import React from 'react';
import type { LotteryType } from '../types';
import { LOTTERIES } from '../constants';
import Header from './Header';
import LotterySelector from './LotterySelector';
import { SearchIcon, CloverIcon } from './IconComponents';

interface SelectionScreenProps {
  selectedLottery: LotteryType;
  contestNumber: string;
  onLotterySelect: (lottery: LotteryType) => void;
  onContestNumberChange: (value: string) => void;
  onSearch: () => void;
}

const SelectionScreen: React.FC<SelectionScreenProps> = ({
  selectedLottery,
  contestNumber,
  onLotterySelect,
  onContestNumberChange,
  onSearch,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Header />
      <div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-center mb-4 text-slate-600">Selecione a Loteria</h2>
          <LotterySelector
            lotteries={LOTTERIES}
            selectedLotteryId={selectedLottery.id}
            onSelect={onLotterySelect}
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <input
              type="number"
              inputMode="numeric"
              value={contestNumber}
              onChange={(e) => onContestNumberChange(e.target.value)}
              placeholder="Nº do Concurso (último)"
              className="flex-1 bg-transparent p-3 text-base placeholder-slate-400 focus:outline-none"
            />
            <button
              onClick={onSearch}
              style={{ backgroundColor: selectedLottery.color }}
              className="p-3 flex-shrink-0 font-semibold flex items-center gap-2 text-white active:opacity-80"
            >
              <SearchIcon color="#FFFFFF" />
              <span>Buscar</span>
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center p-8 text-slate-400 gap-4">
            <CloverIcon />
            <p className="text-slate-400 text-center">Selecione uma loteria e busque um concurso para ver os resultados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionScreen;