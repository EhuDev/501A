import Friday from "./Friday";

import Monday from "./Monday";
import Saturday from "./Saturday";
import Thursday from "./Thursday";
import Tuesday from "./Tuesday";

const Schedule = () => {
  return (
    <div className="bg-white w-full h-full border-2">
      <div>
        <h1 className="text-center border-2 mt-20 p-2 text-4xl font-heading font-semibold ">
          CLASS SCHEDULE
        </h1>
        <div className="schedule-container">
          <Monday />
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
