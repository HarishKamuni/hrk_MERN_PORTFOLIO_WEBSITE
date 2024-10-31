import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <div className="p-5 bg-bg flex justify-between items-center">
    //   <h1 className="text-secondary text-3xl font-semibold">H</h1>
    //   <h1 className="text-white text-3xl font-semibold">R</h1>
    //   <h1 className="text-tertiary text-3xl font-semibold">K</h1>
    // </div>
    <header className="lg:px-16  bg-bg w-full flex flex-wrap items-center  shadow-md p-4">
      <div className="flex items-center justify-between w-full">
        <Link
          to={'/admin'}
          className="text-xl font-semibold text-secondary hover:underline underline-offset-8"
        >
          My Portfolio
        </Link>

        <label for="menu-toggle" className="pointer-cursor sm:block hidden">
          <svg
            class="fill-current text-tertiary"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className=" flex items-center sm:hidden" id="menu">
          <nav>
            <ul class="flex  items-center justify-between gap-4 text-base text-tertiary  ">
              <li>
                <a class="md:p-4 py-3 px-0 block" href="/#">
                  Intro
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block" href="/#">
                  About us
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block" href="#">
                  Experience
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block" href="#">
                  Courses
                </a>
              </li>
              <li>
                <a class="md:p-4 py-3 px-0 block md:mb-0 " href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
