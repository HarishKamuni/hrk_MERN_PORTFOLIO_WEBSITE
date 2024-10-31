import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Courses } from '../../resources/Courses';
import { Projects } from '../../resources/Projects';
import { useSelector } from 'react-redux';

const Course = () => {
  const [selected, setSelected] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { Courses } = portfolioData;

  return (
    <div className="mt-12">
      <SectionTitle title={'Courses'} />
      <div className="flex w-full mt-12 sm:flex-col sm:gap-10">
        <section className="flex flex-col text-white gap-10 items-start border-l border-[#1687966e] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll scroll-smooth  sm:text-xs ">
          {Courses.map((item, i) => {
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
                {item.title}
              </button>
            );
          })}
        </section>
        <div className="flex justify-center items-center gap-5 sm:flex-col ">
          <section className="w-1/2 flex flex-col gap-5 sm:mt-8 sm:w-full">
            <h1 className="text-secondary">{Courses[selected].title}</h1>
            <p className="text-white sm:text-sm">{Courses[selected].desc}</p>
            <p className="text-white sm:text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              repellendus natus quis rem perferendis facilis eos dolores nobis
              tempore eligendi!
            </p>
          </section>
          <span className="w-1/2 sm:w-full sm:mt-5">
            <img
              src={Courses[selected].image}
              alt={Courses[selected].title}
              className="object-cover h-48 w-80"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Course;
