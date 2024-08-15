import "aos/dist/aos.css";
import Friday from "./Friday";
import Monday from "./Monday";
import Saturday from "./Saturday";
import Thursday from "./Thursday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";

const Schedule = ({ darkMode }) => {
  return (
    <div
      className={`bg-skin w-full h-full pb-20 ${
        darkMode ? "bg-white" : ""
      } transition-colors duration-300 ease-in-out flex flex-col items-center`}
    >
      <div>
        <p
          className="text-center  mt-5 p-2 lg:text-6xl text-4xl font-heading font-extrabold bg-gradient-to-t from-yellow-300 to-yellow-600 bg-clip-text text-transparent filter-none "
          data-aos="fade-up"
        >
          CLASS SCHEDULE
        </p>
        <div className="schedule-container">
          <Monday darkMode={darkMode} />
          <Tuesday darkMode={darkMode} />
          <Wednesday darkMode={darkMode} />
          <Thursday darkMode={darkMode} />
          <Friday darkMode={darkMode} />
          <Saturday darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
