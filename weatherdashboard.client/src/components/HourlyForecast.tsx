function HourlyForecast() {
  return (
      <div className="hourlyForecast bg-dark rounded-5 ms-5 text-light text-center d-flex 
                        flex-column align-items-center justify-content-center">
          <h1 className="fw-bold mt-1">Hourly Forecast:</h1>
          <div className="d-flex">
              <div className="forecast rounded-5">
                  <p className="fw-bold fs-3">12:00</p>
                  <img className="weatherIcon" src="./public/sun.png"></img>
                  <p className="fw-bold fs-4">26&deg;C</p>
                  <img className="direction" src="./public/direction.png"></img>
                  <p className="fw-bold fs-4">3km/h</p>
              </div>
              <div className="forecast rounded-5">
                  <p className="fw-bold fs-3">15:00</p>
                  <img className="weatherIcon" src="./public/sun.png"></img>
                  <p className="fw-bold fs-4">27&deg;C</p>
                  <img className="direction NW" src="./public/direction.png"></img>
                  <p className="fw-bold fs-4">3km/h</p>
              </div>
              <div className="forecast rounded-5">
                  <p className="fw-bold fs-3">18:00</p>
                  <img className="weatherIcon" src="./public/cloudy.png"></img>
                  <p className="fw-bold fs-4">27&deg;C</p>
                  <img className="direction" src="./public/direction.png"></img>
                  <p className="fw-bold fs-4">3km/h</p>
              </div>
              <div className="forecast rounded-5">
                  <p className="fw-bold fs-3">21:00</p>
                  <img className="weatherIcon" src="./public/cloudy.png"></img>
                  <p className="fw-bold fs-4">25&deg;C</p>
                  <img className="direction NE" src="./public/direction.png"></img>
                  <p className="fw-bold fs-4">3km/h</p>
              </div>
              <div className="forecast rounded-5">
                  <p className="fw-bold fs-3">00:00</p>
                  <img className="weatherIcon" src="./public/sun.png"></img>
                  <p className="fw-bold fs-4">22&deg;C</p>
                  <img className="direction" src="./public/direction.png"></img>
                  <p className="fw-bold fs-4">3km/h</p>

              </div>
          </div>
      </div>
  );
}

export default HourlyForecast;