import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Intro from './into';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Course from './Course';
import Contact from './Contact';
import Footer from './Footer';
import SocialMediaIcons from './SocialMediaIcons';
import { useSelector } from 'react-redux';

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);
  useEffect(() => {
    console.log(portfolioData);
  }, []);
  return (
    <div>
      {portfolioData && (
        <>
          <Header />

          <div className="bg-bg px-40 sm:px-16">
            <Intro />
            <About />
            {/* <Experience /> */}
            <Project />
            {/* <Course /> */}
            <Contact />
            <Footer />
            <SocialMediaIcons />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
