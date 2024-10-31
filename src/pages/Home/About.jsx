import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { Abouts } = portfolioData;
  const { desc1, desc2, lottieUrl, skills } = Abouts;
  return (
    <div className="sm:mt-5 sm:flex sm:flex-col ">
      <SectionTitle title={'About'} />
      <div className="flex justify-center items-center sm:flex-col w-full gap-10 h-[70vh] mt-10 sm:h-[60vh] sm:mt-48">
        <span className="w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieUrl || ''}
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            loop
            autoplay
            className="w-20"
          ></dotlottie-player>
        </span>
        <div className="w-2/3 sm:w-full flex flex-col gap-5 text-white text-sm">
          <p>{desc1 || ''}</p>
          <p>{desc2 || ''}</p>
        </div>
      </div>
      <div className="sm:mt-48">
        <h2 className="mt-5 text-tertiary text-lg font-medium">
          Here are few technologies I've been working with recently:
        </h2>
        <span className="flex gap-4 sm:gap-2 items-center text-tertiary flex-wrap my-5">
          {skills.map((skill, i) => (
            <button
              key={i}
              className="border border-tertiary py-2 sm:py-1 px-6 sm:px-5"
            >
              {skill}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default About;
