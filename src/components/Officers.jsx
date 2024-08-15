import ClassRep from "./ClassRep";
import Secretary from "./Secretary";

const Officers = ({ darkMode }) => {
  return (
    <div
      className={`bg-skin w-full h-full pb-20 ${
        darkMode ? "bg-white" : ""
      } transition-colors duration-300 ease-in-out flex flex-col items-center`}
    >
      <p
        className="text-center  mt-5 p-2 lg:text-6xl text-4xl font-heading font-extrabold bg-gradient-to-t from-yellow-300 to-yellow-600 bg-clip-text text-transparent filter-none "
        data-aos="fade-up"
      >
        CLASS OFFICERS
      </p>
      <div className="lg:flex lg:space-x-6">
        <ClassRep darkMode={darkMode} />
        <Secretary darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Officers;
