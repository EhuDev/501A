import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleXmark,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Friday = ({ darkMode }) => {
  const [isOpen9, setIsOpen9] = useState(false);
  const [dropOpen9, setDropOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [dropOpen10, setDropOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [dropOpen11, setDropOpen11] = useState(false);

  const toggleOpen9 = () => {
    setIsOpen9(!isOpen9);
    setDropOpen9(false);
  };
  const toggleDropdown9 = () => {
    setDropOpen9(!dropOpen9);
  };
  const toggleOpen10 = () => {
    setIsOpen10(!isOpen10);
    setDropOpen10(false);
  };
  const toggleDropdown10 = () => {
    setDropOpen10(!dropOpen10);
  };
  const toggleOpen11 = () => {
    setIsOpen11(!isOpen11);
    setDropOpen11(false);
  };
  const toggleDropdown11 = () => {
    setDropOpen11(!dropOpen11);
  };

  return (
    <div>
      <div className=" font-sans lg:mx-20 " data-aos="fade-up">
        <h1
          className={`text-center text-4xl font-bold text-[#601008] ${
            darkMode ? "" : "text-[#bb4136]"
          } my-6`}
        >
          FRIDAY
        </h1>
        <div className="lg:flex flex-wrap justify-center ">
          {/* Friday First Subject */}
          <div
            className={`filter-none  rounded-lg shadow-lg m-4 inline-block ${
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
                    <span className="italic bold text-yellow-500 ">
                      {" "}
                      GE-ELEC14
                    </span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold   w-48">
                  Technical Communication
                </h3>
                <span className="text-yellow-500 font-semibold">
                  F 01:30 PM - 03:00 PM
                </span>
                <h3 className="font-bold italic text-red-700">ITC-208B</h3>
              </div>
              <div className="lg:w-36 lg:h-36">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="rounded-full "
                />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen9 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center   border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown9}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen9 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen9(false)}
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
              className={`flex items-center  lg:space-x-20 font-sans m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold  "> Ribaya, Emmie Tavora </div>
              <button
                onClick={toggleOpen9}
                className={`text-center prof-button font-bold border-2 py-2 ml-10 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen9 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen9 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Friday Second Subject */}
          <div
            className={`filter-none  rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="lg:mt-6 ">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500 "> GE08</span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold   w-48">Ethics</h3>
                <span className="text-yellow-500  font-semibold">
                  F 03:00 PM - 04:30 PM
                </span>
                <h3 className="text-red-700 font-bold italic">ITC-208A</h3>
              </div>
              <div className="lg:w-36 lg:h-36">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="rounded-full "
                />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen10 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown10}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen10 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen10(false)}
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
              className={`flex items-center lg:space-x-8 font-sans m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Alim, John Benedich De Velez</div>
              <button
                onClick={toggleOpen10}
                className={`text-center prof-button font-bold border-2 py-2 ml-6 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen10 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen10 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Friday Third Subject */}
          <div
            className={`filter-none rounded-lg shadow-lg m-4 inline-block ${
              darkMode
                ? "bg-white "
                : "shadow-lg bg-gradient-to-t from-skin to-slate-600"
            }`}
          >
            <div className="relative border-b-2 border-yellow-600  flex rounded-t-md bg-gradient-to-t from-blue-950 to-blue-600 p-4 w-full ">
              <div className="lg:mt-6 mt-2">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold text-yellow-500">
                      {" "}
                      ITP310L
                    </span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold w-48 ">
                  Networking Lab
                </h3>
                <span className=" font-semibold text-yellow-500">
                  F 05:30 PM - 08:30 PM
                </span>
                <h3 className="text-white font-bold italic"></h3>
              </div>
              <div className="lg:w-36 lg:h-36">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="rounded-full "
                />
              </div>
              <div
                className={`bg-skin text-skin absolute w-full ml-[-16px]  mt-[-16px] rounded-t-md overflow-hidden transition-all duration-500 ease-slow-down ${
                  isOpen11 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown11}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen11 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen11(false)}
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
              className={`flex items-center  lg:space-x-16 m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Cezar, Alquin Dumal-Is</div>
              <button
                onClick={toggleOpen11}
                className={`text-center prof-button font-bold border-2 py-2 ml-8 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen11 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen11 ? faCircleXmark : faArrowRightFromBracket}
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

export default Friday;
