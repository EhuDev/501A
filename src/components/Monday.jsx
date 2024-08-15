import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleXmark,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Profile from "./partials/Profile";
import week1 from "./partials/files/week1.pptx";

const Monday = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const [isOpen3, setIsOpen3] = useState(false);
  const [dropOpen3, setDropOpen3] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setDropOpen(false);
  };
  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

  const toggleOpen3 = () => {
    setIsOpen3(!isOpen3);
    setDropOpen3(false);
  };
  const toggleDropdown3 = () => {
    setDropOpen3(!dropOpen3);
  };

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
              <div className="lg:mt-2">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500"> ITP311</span>
                  </b>
                </span>
                <h3 className="text-white text-md font-bold  w-48">
                  Fundamentals of Database Systems
                </h3>
                <span className="font-semibold text-yellow-500">
                  M 10:30 AM - 12:30 PM
                </span>
                <h3 className=" font-bold italic text-red-700">ITC-111</h3>
              </div>
              <div className="lg:w-36 lg:h-36">
                <Profile />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center   border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen && (
                      <div className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto">
                        <ul className="list-none ">
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                            <a href={week1} download="File-System.pptx">
                              <p>WEEK 1 Files Systems</p>
                            </a>
                          </li>
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
              className={`flex items-center   lg:space-x-16 m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Gutierrez, Noel Volpane </div>
              <button
                onClick={toggleOpen}
                className={`text-center prof-button font-bold border-2 py-2 ml-8 rounded-md w-24 transition-colors duration-300 ease-in-out ${
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
            className={`filter-none rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="lg:mt-4">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500">
                      {" "}
                      ITP311L
                    </span>
                  </b>
                </span>
                <h3 className="text-white text-md font-bold  w-48">
                  Fundamentals of Database Systems Lab
                </h3>
                <span className="text-yellow-500 font-semibold">
                  M 06:00 PM - 09:00 PM
                </span>
                <h3 className="text-white font-bold italic"></h3>
              </div>
              <div className="lg:w-36 lg:h-36">
                <Profile />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen3 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
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
                            <a href={week1} download="File-System.pptx">
                              <p>WEEK 1 Files Systems</p>
                            </a>
                          </li>
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
              className={`flex items-center  lg:space-x-16  m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Gutierrez, Noel Volpane </div>
              <button
                onClick={toggleOpen3}
                className={`text-center prof-button font-bold border-2 py-2 ml-8 rounded-md w-24 transition-colors duration-300 ease-in-out ${
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
