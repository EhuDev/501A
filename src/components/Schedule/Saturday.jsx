const Saturday = () => {
  return (
    <div>
      <div className="schedule-sub-container">
        <h1>Saturday</h1>
        <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>ITP314</b>
              </span>
              <h3>Technical Communication</h3>
              <span>S 03:00 PM - 06:00 PM</span>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </div>
          <div className="prof">
            <div>Class Professor</div>
            <button className="prof-button">Open </button>
          </div>
        </div>
        <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>ITP315</b>
              </span>
              <h3>Social and Professional Issues</h3>
              <span>S 06:00 PM - 09:00 PM</span>
              <h3>ITC-111</h3>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="" />
            </div>
          </div>
          <div className="prof">
            <div>Class Professor</div>
            <button className="prof-button">Open </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saturday;
