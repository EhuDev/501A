const Monday = (props) => {
  return (
    <div>
      <div className="border-2 font-sans">
        <h1 className="text-center text-4xl font-bold">MONDAY</h1>
        <div className="schedule-card rounded-lg bg-yellow-500  m-2 inline-block">
          <div className="sub-card flex  rounded-t-md bg-blue-500 p-2 w-full">
            <div className="subject">
              <span className="text-skin">
                CODE:
                <b>
                  <span className="italic bold"> ITP311</span>
                </b>
              </span>
              <h3 className="text-skin font-bold">
                Fundamentals of Database Systems
              </h3>
              <span className="text-skin font-semibold">
                M 10:30 AM - 12:30 PM
              </span>
              <h3 className="text-skin font-bold italic">ITC-111</h3>
            </div>
            <div className="">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex space-x-14 m-4 text-skin">
            <div className="font-bold">Sir. Noel Volpane Gutierrez</div>
            <button className="prof-button font-bold">Open </button>
          </div>
        </div>
        {/* <div className="schedule-card">
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
        </div> */}
      </div>
    </div>
  );
};

export default Monday;
