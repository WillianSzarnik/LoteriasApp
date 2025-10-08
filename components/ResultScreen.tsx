
import React from 'react';
import type { DrawResult } from '../types';
import ResultCard from './ResultCard';
import LoadingSpinner from './LoadingSpinner';
import { ChevronLeftIcon } from './IconComponents';

interface ResultScreenProps {
  result: DrawResult | null;
  color: string;
  isLoading: boolean;
  error: string | null;
  onBack: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  color,
  isLoading,
  error,
  onBack,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative flex items-center justify-center mb-4">
        <button
          onClick={onBack}
          className="absolute left-0 p-2 rounded-full hover:bg-slate-100"
          aria-label="Voltar para a seleção"
        >
          <ChevronLeftIcon color="#475569" />
        </button>
        <h1 className="text-2xl font-bold text-slate-700">Resultado</h1>
      </div>
      <div>
        {isLoading && <LoadingSpinner />}
        {error && (
            <div className="items-center p-4 bg-red-100 border border-red-200 rounded-lg text-center">
                <p className="text-red-700">{error}</p>
                <button onClick={onBack} className="mt-4 px-4 py-2 bg-red-600 rounded-lg text-white font-semibold">
                    Tentar Novamente
                </button>
            </div>
        )}
        {result && !isLoading && (
            <ResultCard 
                result={result} 
                color={color} 
                onPrevious={onPrevious}
                onNext={onNext}
            />
        )}
      </div>
    </div>
  );
};

export default ResultScreen;
