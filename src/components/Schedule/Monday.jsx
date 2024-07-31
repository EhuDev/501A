const Monday = (props) => {
  return (
    <div>
      <div className="schedule-sub-container">
        <h1>Monday</h1>
        <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>ITP311</b>
              </span>
              <h3>Fundamentals of Database Systems</h3>
              <span>M 10:30 AM - 12:30 PM</span>
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
        <div className="schedule-card">
          <div className="sub-card">
            <div className="subject">
              <span>
                CODE: <b>ITP310</b>
              </span>
              <h3>Networking 2</h3>
              <span>M 01:30 PM - 03:30 PM</span>
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
              <h3>Fundamentals of Database Systems Laboratory</h3>
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

export default Monday;
