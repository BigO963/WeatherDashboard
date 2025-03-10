function FiveDayForecast() {
  return (
      <div className="fiveDayForecast bg-dark rounded-5 text-light text-center">
          <h2 className="pt-1 fw-bold">5 Day Forecast:</h2>
          <ul className="list-group-dark m-0 p-0">
              <li className="list-group-item d-flex">
                  <img src="./public/cloudy.png"></img>
                  <p className="temp">20&deg;C</p>
                  <p className="date">Tuesday, 11 Mar</p>
              </li>
              <li className="list-group-item d-flex">
                  <img src="./public/cloudy.png"></img>
                  <p className="temp">22&deg;C</p>
                  <p className="date">Wednesday, 12 Mar</p>
              </li>
              <li className="list-group-item d-flex">
                  <img src="./public/sun.png"></img>
                  <p className="temp">27&deg;C</p>
                  <p className="date">Thursday, 13 Mar</p>
              </li>
              <li className="list-group-item d-flex">
                  <img src="./public/cloudywithsun.png"></img>
                  <p className="temp">18&deg;C</p>
                  <p className="date">Friday, 14 Mar</p>
              </li>
              <li className="list-group-item d-flex">
                  <img src="./public/cloud.png"></img>
                  <p className="temp">16&deg;C</p>
                  <p className="date">Saturday, 15 Mar</p>
              </li>
          </ul>
      </div>
  );
}

export default FiveDayForecast;