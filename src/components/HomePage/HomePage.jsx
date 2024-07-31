import Schedule from "../Schedule/Schedule";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div id="home">Home</div>
      <div id="officers">
        <div className="officers-container">
          <h1>Class Officers</h1>
          <div className="card">Class Rep</div>
          <div className="team">
            <div className="card">Secretary</div>
            <div className="card">Secretary</div>
            <div className="card">Secretary</div>
          </div>
        </div>
      </div>
      <div id="schedule">
        <Schedule />
      </div>
    </div>
  );
};

export default HomePage;
