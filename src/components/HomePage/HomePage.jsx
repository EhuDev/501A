import Schedule from "../Schedule/Schedule";
import Home from "./Home";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="bg-white" id="home">
        <div className="w-full h-screen flex items-center justify-start flex-col pt-60">
          <div>
            <h1 className="text-7xl font-extrabold">WELCOME </h1>
            <h2 className="text-3xl text-left">Students of</h2>
            <div className="flex row items-center">
              <h1 className="text-7xl font-extrabold">ICS</h1>
              <span className="text-xl ml-4">
                Institute of <br />
                Computer Studies
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-screen">
        <div className="absolute inset-0 lg:flex justify-center lg:space-x-96 lg:my-10">
          <div className="relative w-96 h-96 min-w-10 min-h-10">
            <img
              src="/src/assets/RTU-Logo-Frame.png"
              alt="Frame Logo"
              className="absolute inset-0 w-full h-full object-cover animate-slow-spin"
            />
            <img
              src="/src/assets/RTU-Logo-center.png"
              alt="Center Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative w-96 h-96 ">
            <img
              src="/src/assets/RTU-Logo-Frame.png"
              alt="Frame Logo"
              className="absolute inset-0 w-full h-full object-cover animate-slow-spin"
            />
            <img
              src="/src/assets/RTU-Logo-center.png"
              alt="Center Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="relative text-4xl font-bold text-black z-10">
          WELCOME CLASS 2024
        </h1>
      </div>
      <div id="officers"></div>
      <div id="schedule">
        <Schedule />
      </div>
    </div>
  );
};

export default HomePage;
