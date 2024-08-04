import Schedule from "./Schedule";
import centerLogo from "../assets/RTU-Logo-center.png";
import frameLogo from "../assets/RTU-Logo-Frame.png";
import iscframe from "../assets/ICS-Logo-frame.png";
import isccenter from "../assets//ICS-Logo-center.png";

const HomePage = ({ darkMode }) => {
  return (
    <div className="">
      <div
        className={`relative bg-skin w-full h-screen ${
          darkMode ? "bg-white" : ""
        } transition-colors duration-300 ease-in-out flex flex-col items-center`}
        id="home"
      >
        <div className="absolute w-full h-full flex justify-center overflow-hidden  opacity-20 ">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 ml-[-250px] mt-4 lg:mt-20 lg:mr-60 drop-shadow-white ">
            <img
              src={frameLogo}
              alt="Frame Logo"
              className="absolute inset-0 w-full h-full object-cover animate-slow-spin"
            />
            <img
              src={centerLogo}
              alt="Center Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 mr-[-250px] mt-72 lg:mt-20 lg:ml-60 drop-shadow-white">
            <img
              src={iscframe}
              alt="Frame Logo"
              className="absolute inset-0 w-full h-full object-cover animate-slow-spin"
            />
            <img
              src={isccenter}
              alt="Center Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative  mt-44 lg:mt-20 select-none ">
          <div className="">
            <h1
              className={`text-6xl text-center lg:text-9xl font-sans font-extrabold  text-[#601008] ${
                darkMode ? "" : "text-[#bb4136]"
              }`}
            >
              WELCOME
            </h1>
            <h1
              className={`text-2xl ml-4 lg:text-3xl lg:ml-0 font-extrabold text-skin  ${
                darkMode ? "" : "text-slate-50"
              } `}
            >
              TO SECTION <span className="text-yellow-500">501-A</span>
            </h1>
            <div className="flex row items-center content-center ">
              <h1 className="text-6xl lg:text-9xl  font-extrabold italic pl-2 text-blue-800 ">
                RTU
              </h1>
              <span className="text-md lg:text-4xl font-extrabold ml-4  drop-shadow-lg">
                <span
                  className={`text-blue-950 ${darkMode ? "" : "text-slate-50"}`}
                >
                  Institute of
                </span>
                <br />
                &nbsp; <span className="text-yellow-500">Computer Studies</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <section id="officers "></section>
      <section id="schedule" className="">
        <Schedule />
      </section>
    </div>
  );
};

export default HomePage;
