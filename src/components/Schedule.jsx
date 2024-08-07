import Friday from "./Friday";

import Monday from "./Monday";
import Saturday from "./Saturday";
import Thursday from "./Thursday";
import Tuesday from "./Tuesday";

const Schedule = ({ darkMode }) => {
  return (
    <div
      className={`bg-skin w-full h-screen border-2 border-red-600 ${
        darkMode ? "bg-white" : ""
      } transition-colors duration-300 ease-in-out flex flex-col items-center`}
    >
      <div>
        <p className="text-center border-2 mt-20 p-2 text-4xl font-heading font-bold bg-gradient-to-t from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
          CLASS SCHEDULE
        </p>
        <div className="schedule-container">
          <Monday darkMode={darkMode} />
          {/* <Tuesday />
        <Thursday />
        <Friday />
        <Saturday /> */}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
