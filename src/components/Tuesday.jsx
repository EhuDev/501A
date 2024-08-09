import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleXmark,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Tuesday = ({ darkMode }) => {
  const [isOpen4, setIsOpen4] = useState(false);
  const [dropOpen4, setDropOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [dropOpen5, setDropOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [dropOpen6, setDropOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [dropOpen7, setDropOpen7] = useState(false);

  const toggleOpen4 = () => {
    setIsOpen4(!isOpen4);
    setDropOpen4(false);
  };
  const toggleDropdown4 = () => {
    setDropOpen4(!dropOpen4);
  };
  const toggleOpen5 = () => {
    setIsOpen5(!isOpen5);
    setDropOpen5(false);
  };
  const toggleDropdown5 = () => {
    setDropOpen5(!dropOpen5);
  };
  const toggleOpen6 = () => {
    setIsOpen6(!isOpen6);
    setDropOpen6(false);
  };
  const toggleDropdown6 = () => {
    setDropOpen6(!dropOpen6);
  };
  const toggleOpen7 = () => {
    setIsOpen7(!isOpen7);
    setDropOpen7(false);
  };
  const toggleDropdown7 = () => {
    setDropOpen7(!dropOpen7);
  };

  return (
    <div>
      <div className="0 font-sans lg:mx-20 " data-aos="fade-up">
        <h1
          className={`text-center text-4xl font-bold  text-[#601008] ${
            darkMode ? "" : "text-[#bb4136]"
          } my-6`}
        >
          TUESDAY
        </h1>

        <div className="lg:flex flex-wrap justify-center ">
          {/* Tuesday First Subject */}
          <div
            className={`filter-none  rounded-lg shadow-lg m-4 inline-block ${
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
                    <span className="italic bold text-yellow-500 ">
                      {" "}
                      ITP312
                    </span>
                  </b>
                </span>
                <h3 className="text-white text-md font-bold   w-48">
                  Systems Integration and Architecture 1
                </h3>
                <span className="text-yellow-500  font-semibold">
                  T 07:30 AM - 09:30 AM
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
                  isOpen4 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32 ">
                    <button
                      onClick={toggleDropdown4}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen4 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen4(false)}
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
              className={`flex items-center  lg:space-x-16 font-sans m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Figueroa, May Barcelona</div>
              <button
                onClick={toggleOpen4}
                className={`text-center prof-button font-bold border-2 py-2 ml-8 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen4 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen4 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Tuesday Second Subject */}
          <div
            className={`filter-none  rounded-lg shadow-lg m-4 inline-block ${
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
                    <span className="italic bold text-yellow-500 ">
                      {" "}
                      ITP312L
                    </span>
                  </b>
                </span>
                <h3 className="text-white text-md font-bold   w-48">
                  Systems Integration and Architecture 1 Lab
                </h3>
                <span className="text-yellow-500  font-semibold">
                  T 09:30 AM - 12:30 PM
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
                  isOpen5 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown5}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen5 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen5(false)}
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
              className={`flex items-center  lg:space-x-16 font-sans m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold"> Figueroa, May Barcelona</div>
              <button
                onClick={toggleOpen5}
                className={`text-center prof-button font-bold border-2 py-2 ml-8 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen5 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen5 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Tuesday Third Subject */}
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
                <h3 className="text-white text-lg  lg:text-md font-bold  w-48">
                  Technical Communication
                </h3>
                <span className="text-yellow-500 font-semibold">
                  T 01:30 PM - 03:00 PM
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
                  isOpen6 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center   border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown6}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen6 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen6(false)}
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
              <div className="font-bold"> Ribaya, Emmie Tavora </div>
              <button
                onClick={toggleOpen6}
                className={`text-center prof-button font-bold border-2 py-2 ml-10 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen6 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen6 ? faCircleXmark : faArrowRightFromBracket}
                  className="ml-2 font-light "
                />
              </button>
            </div>
          </div>

          {/* Tuesday Fourth Subject */}
          <div
            className={`filter-none  rounded-lg shadow-lg m-4 inline-block ${
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
                    <span className="italic bold text-yellow-500 "> GE08</span>
                  </b>
                </span>
                <h3 className="text-white text-md font-bold   w-48">Ethics</h3>
                <span className="text-yellow-500  font-semibold">
                  T 03:00 PM - 04:30 PM
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
                  isOpen7 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Reminder/s
                  </h2>
                  <div className="relative inline-block text-left ml-20 lg:ml-32">
                    <button
                      onClick={toggleDropdown7}
                      className="px-4 py-1 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                      Files <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                    {dropOpen7 && (
                      <div
                        className="absolute right-0 mt-2 w-48 max-h-28 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-y-auto"
                        onClick={() => setIsOpen7(false)}
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
                onClick={toggleOpen7}
                className={`text-center prof-button font-bold border-2 py-2 ml-6 rounded-md w-24 transition-colors duration-300 ease-in-out ${
                  darkMode ? "border-skin" : "border-white"
                }`}
              >
                {isOpen7 ? "Close" : "Open "}
                <FontAwesomeIcon
                  icon={isOpen7 ? faCircleXmark : faArrowRightFromBracket}
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

export default Tuesday;
