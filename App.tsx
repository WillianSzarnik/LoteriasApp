
import React, { useState } from 'react';
import type { DrawResult, LotteryType } from './types';
import { LOTTERIES } from './constants';
import { fetchLotteryResult } from './services/lotteryService';
import SelectionScreen from './components/SelectionScreen';
import ResultScreen from './components/ResultScreen';

type Screen = 'selection' | 'result';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('selection');
  const [selectedLottery, setSelectedLottery] = useState<LotteryType>(LOTTERIES[0]);
  const [contestNumber, setContestNumber] = useState<string>('');
  const [drawResult, setDrawResult] = useState<DrawResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLotterySelect = (lottery: LotteryType) => {
    setSelectedLottery(lottery);
    setContestNumber(''); // Limpa o número do concurso ao trocar de loteria
  };

  const fetchResult = async (lottery: LotteryType, contest: string) => {
    setIsLoading(true);
    setError(null);
    setDrawResult(null);
    setCurrentScreen('result');

    try {
      const result = await fetchLotteryResult(lottery.id, contest);
      setDrawResult(result);
      setContestNumber(result.contest.toString()); // Sempre atualiza para o concurso buscado
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearch = () => {
    fetchResult(selectedLottery, contestNumber);
  };

  const handleBackToSelection = () => {
    setCurrentScreen('selection');
    setError(null);
    setDrawResult(null);
  };

  const handlePreviousContest = () => {
    if (contestNumber) {
        const prevContest = parseInt(contestNumber, 10) - 1;
        if (prevContest > 0) {
            fetchResult(selectedLottery, prevContest.toString());
        }
    }
  };

  const handleNextContest = () => {
      if (contestNumber) {
          const nextContest = parseInt(contestNumber, 10) + 1;
          fetchResult(selectedLottery, nextContest.toString());
      }
  };

  return (
    <main className="flex-1 bg-slate-50 min-h-screen">
      <div className="flex-1">
        {currentScreen === 'selection' ? (
          <SelectionScreen
            selectedLottery={selectedLottery}
            contestNumber={contestNumber}
            onLotterySelect={handleLotterySelect}
            onContestNumberChange={setContestNumber}
            onSearch={handleSearch}
          />
        ) : (
          <ResultScreen
            result={drawResult}
            color={selectedLottery.color}
            isLoading={isLoading}
            error={error}
            onBack={handleBackToSelection}
            onPrevious={handlePreviousContest}
            onNext={handleNextContest}
          />
        )}
      </div>
    </main>
  );
};

export default App;
