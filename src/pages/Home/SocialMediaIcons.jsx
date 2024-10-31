import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SocialMediaIcons = () => {
  return (
    <div className="fixed left-0 bottom-0 px-5 sm:static sm:-mt-5 sm:pb-5">
      <div className="flex flex-col gap-6 items-center justify-center opacity-70 sm:flex-row">
        <Link
          to={'/'}
          className="text-xl text-white hover:text-tertiary transition-all"
        >
          <FaFacebook />
        </Link>
        <Link
          to={'/'}
          className="text-xl text-white hover:text-tertiary transition-all"
        >
          <IoMail />
        </Link>
        <Link
          to={'/'}
          className="text-xl text-white hover:text-tertiary transition-all"
        >
          <FaSquareInstagram />
        </Link>
        <Link
          to={'/'}
          className="text-xl text-white hover:text-tertiary transition-all"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={'/'}
          className="text-xl text-white hover:text-tertiary transition-all"
        >
          <FaGithub />
        </Link>
        <div className="w-[0.5px] h-40 bg-[#fff] -mt-3  sm:hidden"></div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
