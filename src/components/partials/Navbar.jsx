import Logo from "./assets/LOGO.svg";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faHouse,
  faUserGroup,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="sticky top-0 w-full select-none z-50 ">
      <div className=""></div>
      <div
        className={`navbar  bg-skin text-stone-300 font-medium shadow-lg py-1 font-sans ${
          darkMode ? " bg-white lg:text-skin" : " "
        } transition-colors duration-300 ease-in-out filter-none `}
      >
        {/* Navbar Menu */}
        <div
          className="navbar-start ml-[-5px] filter-none "
          data-aos="fade-down"
        >
          <div className=" filter-none  relative mx-8 lg:m-0">
            <button onClick={toggleOpen} className="lg:hidden ">
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                  isOpen
                    ? "rotate-45 opacity-0 scale-0"
                    : "rotate-0 opacity-100 scale-100"
                }`}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className={`m-2 w-10 h-10 text-[#601008]  ${
                    darkMode ? "" : "text-white"
                  }`}
                />
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                  isOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "-rotate-45 opacity-0 scale-0"
                }`}
              >
                <FontAwesomeIcon
                  icon={faX}
                  className={`m-2 w-8 h-8  text-[#601008] ${
                    darkMode ? "" : "text-white"
                  }`}
                />
              </div>
            </button>
          </div>
          <Link
            className="btn btn-ghost text-yellow-500 text-xl ml-[-14px]  font-bold lg:ml-2"
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
          >
            CEIT-37-501A
          </Link>
        </div>

        <div
          className="navbar-end hidden lg:flex filter-none "
          data-aos="fade-down"
        >
          <ul className="flex space-x-7 px-1 text-xl">
            <li className="hover:text-yellow-500 cursor-pointer">
              <Link to="home" smooth={true} duration={500} offset={-70}>
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              <Link to="officers" smooth={true} duration={500} offset={-70}>
                Officers
              </Link>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              <Link to="schedule" smooth={true} duration={500} offset={-70}>
                Schedule
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="navbar-end lg:max-w-14 filter-none "
          data-aos="fade-down"
        >
          <div className="flex content-center items-center">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 rounded transition-transform duration-300 ease-in-out w-12 h-12 hover:text-yellow-500"
            >
              {darkMode ? (
                <svg
                  className="h-10 w-10 fill-current transform transition-transform duration-300 ease-in-out rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              ) : (
                <svg
                  className="h-10 w-10 fill-current transform transition-transform duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}
            </button>
          </div>
          <div className="p-0 ">
            <Link to="home" smooth={true} duration={600} offset={-70}>
              <img
                src={Logo}
                alt="logo"
                className={`lg:hidden w-14 h-14  rounded-full flex flex-row-reverse drop-shadow-white object-cover ${
                  darkMode ? "" : ""
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        // Navbar slide-show
        className={`absolute rounded-r-md bg-skin opacity-90  w-40 h-52  overflow-hidden transition-all duration-300 ease-left-to-right  ${
          isOpen ? "translate-x-0 opacity-100 " : "-translate-x-full opacity-0 "
        } ${darkMode ? "text-white" : "text-skin bg-white"}`}
      >
        <ul className="border-b-2 border-yellow-600 pb-6">
          <li className="mt-6 mx-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faHouse} className="w-5 h-5 mr-2" />
              Home
            </Link>
          </li>
          <li className="mt-6 mx-4">
            <Link
              to="officers"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faUserGroup} className="w-5 h-5 mr-2" />
              Officers
            </Link>
          </li>
          <li className="mt-6 mx-4">
            <Link
              to="schedule"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faCalendarDays} className="w-5 h-5 mr-2" />
              Schedule
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
