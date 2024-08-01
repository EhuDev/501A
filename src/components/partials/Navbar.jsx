import { useRef } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const clickRef = useRef();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="sticky top-0 ">
      <div
        className={`navbar bg-white text-stone-500 font-medium drop-shadow-md w-full py-1  ${
          darkMode ? "bg-[#1D232A] text-white " : "bg-white text-black"
        }`}
      >
        <div className="navbar-start ml-[-5px] ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#officers">Officers</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BSIT-501A</a>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#officers">Officers</a>
            </li>
            <li>
              <a href="#schedule">Schedule</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:max-w-14  ">
          <div className=" flex content-center items-center ">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 rounded transition-transform duration-300 ease-in-out w-12 h-12"
            >
              {darkMode ? (
                <svg
                  className="h-10 w-10 fill-current transform transition-transform duration-300 ease-in-out "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              ) : (
                <svg
                  className="h-10 w-10 fill-current transform transition-transform duration-300 ease-in-out rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              )}
            </button>
          </div>
          <div className="p-0">
            <img
              src="/src/assets/LOGO.png"
              alt=""
              className={`lg:hidden w-14 h-14 drop-shadow-2xl rounded-full flex flex-row-reverse ${
                darkMode ? "" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
