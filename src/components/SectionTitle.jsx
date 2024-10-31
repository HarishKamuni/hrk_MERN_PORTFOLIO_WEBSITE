import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex gap-10 items-center py-10 sm:py-2">
      <h2 className="text-3xl sm:text-xl text-secondary">{title}</h2>
      <div className="bg-tertiary w-80 h-[1px] block mt-auto"></div>
    </div>
  );
};

export default SectionTitle;
