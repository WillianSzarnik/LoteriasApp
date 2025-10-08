
import React from 'react';
import type { LotteryType } from '../types';
import type { LotteryId } from '../constants';

interface LotterySelectorProps {
  lotteries: LotteryType[];
  selectedLotteryId: LotteryId;
  onSelect: (lottery: LotteryType) => void;
}

const LotterySelector: React.FC<LotterySelectorProps> = ({ lotteries, selectedLotteryId, onSelect }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between">
      {lotteries.map((lottery) => (
        <button
          key={lottery.id}
          onClick={() => onSelect(lottery)}
          className="p-3 rounded-lg items-center justify-center mb-3 shadow-sm w-[32%] border-2"
          style={{
            backgroundColor: selectedLotteryId === lottery.id ? lottery.color : '#FFFFFF',
            borderColor: selectedLotteryId === lottery.id ? lottery.color : '#e2e8f0',
          }}
        >
          <span
            style={{
              color: selectedLotteryId === lottery.id ? '#FFFFFF' : '#334155',
              fontWeight: '600',
              fontSize: 12,
              textAlign: 'center',
            }}
          >
            {lottery.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LotterySelector;
