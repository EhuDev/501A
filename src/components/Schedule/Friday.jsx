const Friday = () => {
  return (
    <div>
      <div className="schedule-sub-container">
        <h1>Friday</h1>
        <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>GE-ELEC14</b>
              </span>
              <h3>Technical Communication</h3>
              <span>F 01:30 PM - 03:00 PM</span>
              <h3>ITC-208B</h3>
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
                CODE: <b>GE08</b>
              </span>
              <h3>Ethics</h3>
              <span>M 03:00 PM - 04:30 PM</span>
              <h3>ITC-208A</h3>
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
                CODE: <b>ITP311L</b>
              </span>
              <h3>Networking 2 Laboratory</h3>
              <span>M 05:30 PM - 08:30 PM</span>
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

export default Friday;
