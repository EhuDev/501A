import Schedule from "./Schedule";
import centerLogo from "../assets/RTU-Logo-center.webp";
import frameLogo from "../assets/RTU-Logo-Frame.webp";
import iscframe from "../assets/ICS-Logo-frame.webp";
import isccenter from "../assets/ICS-Logo-center.webp";
import "aos/dist/aos.css";

const HomePage = ({ darkMode }) => {
  //

  return (
    <>
      <div name="home" className="h-full ">
        <div
          className={`relative bg-skin w-full h-screen ${
            darkMode ? "bg-white" : ""
          } transition-colors duration-300 ease-in-out flex flex-col items-center`}
          id="home"
        >
          <div className="absolute w-full h-full flex justify-center overflow-hidden  opacity-20 ">
            <div
              className="relative w-72 h-72 lg:w-96 lg:h-96 ml-[-250px] mt-4 lg:mt-20 lg:mr-60 drop-shadow-white filter-none"
              data-aos="fade-right"
            >
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
            <div
              className="relative w-72 h-72 lg:w-96 lg:h-96 mr-[-250px] mt-72 lg:mt-20 lg:ml-60 drop-shadow-white "
              data-aos="fade-left"
            >
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
          <div
            className="relative  mt-44 lg:mt-20 select-none  "
            data-aos="zoom-in"
          >
            <div className="">
              <h1
                className={`text-6xl text-center lg:text-9xl font-sans font-extrabold  text-[#601008] ${
                  darkMode ? "" : "text-[#bb4136]"
                }`}
              >
                WELCOME
              </h1>
              <h1
                className={`text-lg text-center lg:text-3xl font-heading font-extrabold text-skin  ${
                  darkMode ? "" : "text-slate-50"
                } `}
              >
                STUDENTS OF
              </h1>
              <div className=" ">
                <h1 className="text-4xl lg:text-8xl  text-center font-extrabold italic  text-yellow-500 ">
                  ICS-501A
                </h1>
              </div>
              <div className="text-center ">
                <span className="text-2xl lg:text-5xl font-extrabold ml-4  drop-shadow-lg">
                  <span
                    className={`text-blue-950 font-heading ${
                      darkMode ? "" : "text-slate-50"
                    }`}
                  >
                    {"{"} Code, &nbsp;
                  </span>

                  <span
                    className={`text-[#601008]  font-heading  ${
                      darkMode ? "" : "text-[#bb4136]"
                    }`}
                  >
                    Debug, &nbsp;
                  </span>

                  <span className="text-blue-800  font-heading ">
                    Succeed {"}"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <section name="officers"></section>
        <section name="schedule" className="">
          <Schedule darkMode={darkMode} />
        </section>
      </div>
    </>
  );
};

export default HomePage;
