import React from 'react';

const Footer = () => {
  return (
    <div className="py-10">
      <div className="bg-[#25bad47c] w-full h-[1px] block mt-auto mb-10"></div>
      <div className="flex justify-center items-center flex-col gap-1 opacity-70">
        <span className="text-white text-sm">Designed and Developed by</span>
        <span className="text-tertiary ml-2 uppercase ">{`<Harish Kamuni>`}</span>
      </div>
    </div>
  );
};

export default Footer;
