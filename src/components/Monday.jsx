import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleXmark,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Monday = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [dropOpen2, setDropOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [dropOpen3, setDropOpen3] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setDropOpen(false);
  };
  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };
  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
    setDropOpen2(false);
  };
  const toggleDropdown2 = () => {
    setDropOpen2(!dropOpen2);
  };
  const toggleOpen3 = () => {
    setIsOpen3(!isOpen3);
    setDropOpen3(false);
  };
  const toggleDropdown3 = () => {
    setDropOpen3(!dropOpen3);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust as necessary
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <div className="font-sans lg:mx-20  " data-aos="fade-up">
        <h1
          className={`text-center text-4xl font-bold text-[#601008] ${
            darkMode ? "" : "text-[#bb4136]"
          } my-6`}
        >
          MONDAY
        </h1>
        <div className="lg:flex flex-wrap justify-center ">
          {/* Monday First Subject */}
          <div
            className={`filter-none rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="subject">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500"> ITP311</span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold  w-48">
                  Fundamentals of Database Systems
                </h3>
                <span className="font-semibold text-yellow-500">
                  M 10:30 AM - 12:30 PM
                </span>
                <h3 className=" font-bold italic text-red-700">ITC-111</h3>
              </div>
              <div className="">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="rounded-full "
                />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  space-x-28 border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Remider/s
                  </h2>
                  <div className="relative inline-block text-left ">
                    <button
                      onClick={toggleDropdown}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen(false)}
                      >
                        <ul className="list-none p-0 m-0">
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                            TBA
                          </li>
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100"></li>
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100"></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <ul className="m-2 mx-4 max-h-32 overflow-y-auto  ">
                  <li>TBA</li>
                </ul>
              </div>
            </div>
            <div
              className={`flex items-center space-x-12 lg:space-x-16 m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Gutierrez, Noel Volpane </div>
              <button
                onClick={toggleOpen}
                className={`text-center prof-button font-bold border-2 p-2 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Monday Second Subject */}
          <div
            // data-aos="zoom-in-up"
            className={`filter-none rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="mt-6">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500"> ITP310</span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold w-48 ">
                  Networking
                </h3>
                <span className=" font-semibold text-yellow-500">
                  M 01:30 PM - 03:30 PM
                </span>
                <h3 className="text-white font-bold italic"></h3>
              </div>
              <div className="">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="rounded-full "
                />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen2 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  space-x-28 border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Remider/s
                  </h2>
                  <div className="relative inline-block text-left ">
                    <button
                      onClick={toggleDropdown2}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen2 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen2(false)}
                      >
                        <ul className="list-none p-0 m-0">
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                            TBA
                          </li>
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100"></li>
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100"></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <ul className="m-2 mx-4 max-h-32 overflow-y-auto  ">
                  <li>TBA</li>
                </ul>
              </div>
            </div>

            <div
              className={`flex items-center space-x-14 lg:space-x-16 m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Cezar, Alquin Dumal-Is </div>
              <button
                onClick={toggleOpen2}
                className={`text-center prof-button font-bold border-2 p-2 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen2 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen2 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Monday Third Subject */}
          <div
            // data-aos="zoom-in-up"
            className={`filter-none rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="subject">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold"> ITP311L</span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold  w-48">
                  Fundamentals of Database Systems Lab
                </h3>
                <span className="text-white font-semibold">
                  M 05:30 PM - 08:30 PM
                </span>
                <h3 className="text-white font-bold italic">ITC-111</h3>
              </div>
              <div className="">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="rounded-full "
                />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen3 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  space-x-28 border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Remider/s
                  </h2>
                  <div className="relative inline-block text-left ">
                    <button
                      onClick={toggleDropdown3}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen3 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen3(false)}
                      >
                        <ul className="list-none p-0 m-0">
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                            TBA
                          </li>
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100"></li>
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100"></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <ul className="m-2 mx-4 max-h-32 overflow-y-auto  ">
                  <li>TBA</li>
                </ul>
              </div>
            </div>

            <div
              className={`flex items-center space-x-12 lg:space-x-16  m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Gutierrez, Noel Volpane </div>
              <button
                onClick={toggleOpen3}
                className={`text-center prof-button font-bold border-2 p-2 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen3 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen3 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monday;
