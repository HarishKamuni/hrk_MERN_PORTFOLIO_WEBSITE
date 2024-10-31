import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Experiences } from '../../resources/Experiences';
import { useSelector } from 'react-redux';

const Experience = () => {
  const [selected, setSelected] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { Experiences } = portfolioData;

  return (
    <div className="mt-12">
      <SectionTitle title={'Experience'} />
      <div className="flex w-full mt-12 sm:flex-col">
        <section className="flex flex-col text-white gap-10 items-start border-l border-[#1687966e] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll sm:text-xs ">
          {Experiences.map((item, i) => {
            return (
              <button
                key={i}
                className={`text-lg sm:text-sm pl-5 ${
                  selected === i
                    ? 'text-tertiary border-l-4 -ml-[2.5px] border-tertiary bg-[#1a769233] px-5 py-1'
                    : 'text-white'
                }`}
                onClick={() => setSelected(i)}
              >
                {item.period}
              </button>
            );
          })}
        </section>
        <section className="w-2/3 flex flex-col gap-5 sm:mt-8 sm:w-full">
          <h1 className="text-secondary">{Experiences[selected].title}</h1>
          <h1 className="text-tertiary">{Experiences[selected].company}</h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            repellendus natus quis rem perferendis facilis eos dolores nobis
            tempore eligendi!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Experience;
