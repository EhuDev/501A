import Friday from "./Friday";
import Monday from "./Monday";
import Saturday from "./Saturday";
import Thursday from "./Thursday";
import Tuesday from "./Tuesday";

const Schedule = () => {
  return (
    <div>
      <h1>Class Schedule</h1>
      <div className="schedule-container">
        <Monday />
        <Tuesday />
        <Thursday />
        <Friday />
        <Saturday />
      </div>
    </div>
  );
};

export default Schedule;
