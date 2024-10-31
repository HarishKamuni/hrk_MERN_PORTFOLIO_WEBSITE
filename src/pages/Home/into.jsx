import React from 'react';
import { useSelector } from 'react-redux';

const Intro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { Intros } = portfolioData;
  const { welcomeText, firstName, lastName, caption, desc } = Intros;
  return (
    <div
      className="h-[80vh] sm:h-[60vh] bg-bg flex flex-col items-start justify-center gap-8 sm:gap-4 py-10 "
      id="/intro"
    >
      <h1 className="text-white font-semibold text-xl">{welcomeText || ''}</h1>
      <h1 className="text-7xl sm:text-2xl font-semibold text-secondary">
        {firstName || ''} {lastName || ''}
      </h1>
      <h1 className="text-6xl sm:text-xl font-semibold text-white">
        {caption || ''}
      </h1>
      <p className="text-white w-3/3 sm:w-full sm:text-sm">{desc || ''}</p>
      <button className="border-2 border-tertiary text-tertiary uppercase px-8 py-3 rounded sm:py-1 sm:px-5 sm:text-sm">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
