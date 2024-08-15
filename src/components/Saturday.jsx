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

const Saturday = ({ darkMode }) => {
  const [isOpen12, setIsOpen12] = useState(false);
  const [dropOpen12, setDropOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [dropOpen13, setDropOpen13] = useState(false);

  const toggleOpen12 = () => {
    setIsOpen12(!isOpen12);
    setDropOpen12(false);
  };
  const toggleDropdown12 = () => {
    setDropOpen12(!dropOpen12);
  };
  const toggleOpen13 = () => {
    setIsOpen13(!isOpen13);
    setDropOpen13(false);
  };
  const toggleDropdown13 = () => {
    setDropOpen13(!dropOpen13);
  };

  return (
    <div>
      <div className=" font-sans lg:mx-20 " data-aos="fade-up">
        <h1
          className={`text-center text-4xl font-bold text-[#601008] ${
            darkMode ? "" : "text-[#bb4136]"
          } my-6`}
        >
          SATURDAY
        </h1>
        <div className="lg:flex flex-wrap justify-center ">
          {/* Saturday First Subject */}
          <div
            className={`filter-none rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="mt-2 lg:mt-6">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500 ">
                      {" "}
                      ITP314
                    </span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold  w-48">
                  2D Animation
                </h3>
                <span className="text-yellow-500  font-semibold">
                  S 03:00 PM - 06:00 PM
                </span>
                <h3 className="text-white font-bold italic"></h3>
              </div>
              <div className="lg:w-36 lg:h-36">
                <Profile />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen12 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown12}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen12 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen12(false)}
                      >
                        <ul className="list-none p-0 m-0">
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                            TBA
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
              className={`flex items-center    m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold  lg:w-60">
                Sison, Eunice Bernadette Cledera
              </div>
              <button
                onClick={toggleOpen12}
                className={`text-center prof-button font-bold border-2 py-2  rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen12 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen12 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Saturday Second Subject */}
          <div
            className={`filter-none rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="mt-2 lg:mt-6">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500 ">
                      {" "}
                      ITP315
                    </span>
                  </b>
                </span>
                <h3 className="text-white text-md font-bold  w-48">
                  Social and Professional Issues
                </h3>
                <span className="text-yellow-500  font-semibold">
                  S 06:00 PM - 09:00 PM
                </span>
                <h3 className="text-red-700 font-bold italic">ITC-111</h3>
              </div>
              <div className="lg:w-36 lg:h-36">
                <Profile />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen13 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown13}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen13 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen13(false)}
                      >
                        <ul className="list-none p-0 m-0">
                          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                            TBA
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
              className={`flex items-center lg:space-x-7  m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold  ">Villanueva, Jaevier Angcao</div>
              <button
                onClick={toggleOpen13}
                className={`text-center prof-button font-bold border-2 py-2 ml-2  rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen13 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen13 ? faCircleXmark : faArrowRightFromBracket}
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

export default Saturday;
