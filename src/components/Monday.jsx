import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleXmark,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

const Monday = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setDropOpen(false);
  };
  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

  return (
    <div>
      <div className="border-2 border-blue-600 font-sans ">
        <h1
          className={`text-center text-4xl font-bold text-[#601008] ${
            darkMode ? "" : "text-[#bb4136]"
          }`}
        >
          MONDAY
        </h1>
        <div
          className={` rounded-lg drop-shadow-lg m-4 inline-block ${
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
                  <span className="italic bold"> ITP311</span>
                </b>
              </span>
              <h3 className="text-white font-bold">
                Fundamentals of Database Systems
              </h3>
              <span className="text-white font-semibold">
                M 10:30 AM - 12:30 PM
              </span>
              <h3 className="text-white font-bold italic">ITC-111</h3>
            </div>
            <div className="">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="rounded-full"
              />
            </div>
            <div
              className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                isOpen ? "h-full opacity-100" : "h-0 opacity-0"
              } ${darkMode ? "text-white" : "bg-white "}`}
            >
              <div className="flex flex-row items-center  space-x-4 border-b-2 border-yellow-600 ">
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
                      onClick={() => setIsOpen(false)} // Close dropdown on click outside
                    >
                      <ul className="list-none p-0 m-0">
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Module 1
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Module 2
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                          Module 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <ul className="m-2 mx-4 max-h-32 overflow-y-auto  ">
                <li>Assignment 1</li>
                <li>Quiz 2</li>
                <li>Ohab</li>
                <li>Baho</li>
                <li>Hehe</li>
              </ul>
            </div>
          </div>

          <div
            className={`flex items-center space-x-6 m-3 transition-colors duration-300 ease-in-out ${
              darkMode ? " text-skin" : "text-white "
            }`}
          >
            <div className="font-bold">Sir. Noel Volpane Gutierrez</div>
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

        {/* <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>ITP310</b>
              </span>
              <h3>Networking 2</h3>
              <span>M 01:30 PM - 03:30 PM</span>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </div>
          <div className="prof">
            <div>Class Professor</div>
            <button className="prof-button">Open </button>
          </div>
        </div>
        <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>ITP311L</b>
              </span>
              <h3>Fundamentals of Database Systems Laboratory</h3>
              <span>M 05:30 PM - 08:30 PM</span>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </div>
          <div className="prof">
            <div>Class Professor</div>
            <button className="prof-button">Open </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Monday;
