import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleXmark,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Saturday = ({ darkMode }) => {
  const [isOpen12, setIsOpen12] = useState(false);
  const [dropOpen12, setDropOpen12] = useState(false);

  const toggleOpen12 = () => {
    setIsOpen12(!isOpen12);
    setDropOpen12(false);
  };
  const toggleDropdown12 = () => {
    setDropOpen12(!dropOpen12);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust as necessary
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* <div className="schedule-sub-container">
        <h1>Saturday</h1>
        <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>ITP314</b>
              </span>
              <h3>Technical Communication</h3>
              <span>S 03:00 PM - 06:00 PM</span>
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
                CODE: <b>ITP315</b>
              </span>
              <h3>Social and Professional Issues</h3>
              <span>S 06:00 PM - 09:00 PM</span>
              <h3>ITC-111</h3>
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
      </div> */}
      <div
        className="border-2 border-violet-600 font-sans lg:mx-20 "
        data-aos="fade-up"
      >
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
              <div className="mt-6">
                <span className="text-white">
                  CODE:
                  <b>
                    <span className="italic bold"> ITP314</span>
                  </b>
                </span>
                <h3 className="text-white text-lg font-bold  w-48">
                  2D Animation
                </h3>
                <span className="text-white font-semibold">
                  S 03:00 PM - 06:00 PM
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
                  isOpen12 ? "h-full opacity-100" : "h-0 opacity-0"
                } ${darkMode ? "text-white" : "bg-white "}`}
              >
                <div className="flex flex-row items-center  space-x-28 border-b-2 border-yellow-600 ">
                  <h2 className="ml-2 text-lg">
                    <FontAwesomeIcon icon={faBell} className="mx-2" />
                    Remider/s
                  </h2>
                  <div className="relative inline-block text-left ">
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
              className={`flex items-center lg:space-x-7  m-3 transition-colors duration-150 ease-in-out ${
                darkMode ? " text-skin" : "text-white "
              }`}
            >
              <div className="font-bold  lg:text-sm">
                Sison, Eunice Bernadette Cledera
              </div>
              <button
                onClick={toggleOpen12}
                className={`text-center prof-button font-bold border-2 p-2 rounded-md w-24 transition-colors duration-300 ease-in-out ${
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
        </div>
      </div>
    </div>
  );
};

export default Saturday;
