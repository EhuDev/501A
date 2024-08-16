import { useState } from "react";
import seanPic from "./partials/assets/sean-pic.png";
import bini from "./partials/assets/bini.png";

const ClassRep = ({ darkMode }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <div data-aos="fade-up" className="">
        <div
          className="flex flex-col items-center justify-center my-6 cursor-pointer drop-shadow-red-md"
          onClick={handleClick}
        >
          <div
            className={`h-72 w-52 bg-[#FF1842] rounded-2xl relative transition-all duration-500 transform ${
              isClicked ? "scale-x-[-1] opacity-0 " : "rotate-0 opacity-100 "
            }`}
          >
            <img
              src={seanPic}
              alt="sean-pic"
              className="w-full h-full object-cover rounded-2xl "
            />
            <p></p>
          </div>
          <div
            className={`h-72 w-52 bg-[#FF1842] rounded-2xl absolute transition-all duration-500 transform flex justify-center flex-col items-center ${
              isClicked ? " " : "scale-x-[-1] opacity-0"
            }`}
          >
            {/* <img src={bini} alt="bini" className="w-full " /> */}
            {/* <p className="text-white">x</p> */}
            <p className="text-center text-white text-xl font-heading">
              SEAN ANDREW ALCEDO
            </p>
          </div>
        </div>
        <p
          className={`text-center font-heading text-xl mt-[-15px] font-medium ${
            darkMode ? "text-skin" : "text-white"
          }`}
        >
          REPRESENTATIVE
        </p>
      </div>
    </div>
  );
};

export default ClassRep;
