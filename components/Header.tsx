
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="items-center py-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Resultados da Loteria
      </h1>
      <p className="mt-2 text-lg text-slate-600">Confira os números da sorte</p>
    </header>
  );
};

export default Header;
