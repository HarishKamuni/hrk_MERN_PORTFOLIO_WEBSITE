import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-bg z-10">
      <div className="flex gap-4 text-5xl font-bold sm:text-3xl sm:font-semibold">
        <h1 className=" text-secondary h">H</h1>
        <h1 className=" text-white r">R</h1>
        <h1 className=" text-tertiary k">K</h1>
      </div>
    </div>
  );
};

export default Loader;
