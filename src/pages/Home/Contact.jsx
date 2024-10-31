import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { Contacts } = portfolioData;

  return (
    <div className="mt-12">
      <SectionTitle title={'Say Hello'} />
      <div className="flex  justify-around items-center sm:flex-col sm:justify-center sm:mt-5">
        <section className="flex flex-col gap-4">
          <span className="text-white">{`{`}</span>
          <div className="flex flex-col gap-2 text-white font-medium sm:font-mono sm:text-sm ml-5">
            {Object.keys(Contacts).map((key, i) => {
              return (
                <span className="flex gap-2">
                  <span className="text-tertiary">{key}:</span>
                  <span>{`${
                    Contacts[key] !== null ? `${Contacts[key]}` : 'null'
                  }`}</span>
                </span>
              );
            })}
          </div>
          <span className="text-white">{`}`}</span>
        </section>
        <section className="h-[350px] sm:h=[200px] mb-10">
          <dotlottie-player
            src="https://lottie.host/7dfa223a-b459-49a0-98a8-bae0a891d22d/aHE1epyVE1.json"
            background="transparent"
            speed="1"
            // style="width: 300px; height: 300px;"
            loop
            autoplay
          ></dotlottie-player>
        </section>
      </div>
    </div>
  );
};

export default Contact;
