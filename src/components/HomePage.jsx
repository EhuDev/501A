import Schedule from "./Schedule";
import centerLogo from "../assets/RTU-Logo-center.png";
import frameLogo from "../assets/RTU-Logo-Frame.png";

const HomePage = ({ darkMode }) => {
  return (
    <div className="">
      {/* <div
        className={`bg-skin w-full h-screen   ${
          darkMode ? "bg-white" : ""
        } transition-colors duration-300 ease-in-out  flex items-center justify-start flex-col  `}
        id="home"
      >
        <div className="mt-60 lg:mt-20 select-none">
          <div className="">
            <h1
              className={`text-7xl lg:text-9xl font-extrabold text-[#601008] ${
                darkMode ? "" : "text-[#bb4136]"
              }`}
            >
              WELCOME
            </h1>
            <h1
              className={`text-3xl  lg:text-3xl text-left  font-extrabold text-blue-900 ${
                darkMode ? "" : "text-blue-600"
              }`}
            >
              Students of
            </h1>
            <div className="flex row items-center content-center ">
              <h1
                className={`text-7xl lg:text-9xl font-extrabold italic pl-2 text-skin ${
                  darkMode ? "" : "text-white"
                }`}
              >
                ICS
              </h1>
              <span className="text-2xl lg:text-4xl font-extrabold ml-4 text-yellow-500">
                Institute of <br />
                &nbsp; Computer Studies
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className={`relative bg-skin w-full h-screen ${
          darkMode ? "bg-white" : ""
        } transition-colors duration-300 ease-in-out flex flex-col items-center`}
        id="home"
      >
        {/* Background Images */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center overflow-hidden  opacity-20">
          <div className="relative w-96 h-96 ml-[-250px] mt-20 lg:mr-60 ">
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
          <div className="relative w-96 h-96 mr-[-250px] mt-96 lg:mt-20 lg:ml-60 ">
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
        </div>

        {/* Main Content */}
        <div className="relative mt-72 lg:mt-20 select-none">
          <div>
            <h1
              className={`text-7xl lg:text-9xl font-extrabold text-[#601008] ${
                darkMode ? "" : "text-[#bb4136]"
              }`}
            >
              WELCOME
            </h1>
            <h1
              className={`text-3xl lg:text-3xl text-left font-extrabold text-blue-900 ${
                darkMode ? "" : "text-blue-400"
              }`}
            >
              Students of
            </h1>
            <div className="flex row items-center content-center">
              <h1
                className={`text-7xl lg:text-9xl font-extrabold italic pl-2 text-skin ${
                  darkMode ? "" : "text-white"
                }`}
              >
                ICS
              </h1>
              <span className="text-2xl lg:text-4xl font-extrabold ml-4 text-yellow-500 drop-shadow-lg">
                Institute of <br />
                &nbsp; Computer Studies
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="officers"></div>
      <div id="schedule">
        <Schedule />
      </div>
    </div>
  );
};

export default HomePage;
