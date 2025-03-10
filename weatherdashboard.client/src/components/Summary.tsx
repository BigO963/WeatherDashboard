function Summary() {
  return (

      <div className="Summary mt-5 border-5 bg-dark d-flex rounded-5 text-light 
                     ms-5 shadow-lg">
          <div className="w-50 flex-grow-1 mt-5">
              <div className="ms-4">
                  <p className="fs-1 fw-bold m-0">24&deg;C</p>
                  <p className="fs-5">Feels like: <strong>22&deg;C</strong></p>
              </div>
              <div className="d-flex flex-column ms-4">
                  <div className="sunIcon d-flex mb-3">
                      <img className=" me-2" src="./public/sunrise.png"></img>
                      <div className="">
                          <p className="m-0 ">Sunrise</p>
                          <p className="m-0 ">06:37 AM</p>
                      </div>
                  </div>
                  <div className="sunIcon d-flex">
                      <img className="me-1" src="./public/sunset.png"></img>
                      <div>
                          <p className="m-0">Sunset</p>
                          <p className="m-0">20:37 AM</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="w-50 flex-grow-1 d-flex flex-column mb-4 
                            justify-content-center align-items-center">
            <img className="mb-2" src="./public/sun.png"></img>
            <p className="m-0 fw-bold fs-1">Sunny</p>
          </div>
          <div className="w-50 flex-grow-1 mt-5">
              <div className="flex-grow-1 d-flex">
                  <div className="text-center w-50">
                   <img className="humidity" src="./public/humidity.png"></img>
                      <p className="mb-2 fw-bold">41%</p>
                      <p>Humidity</p>
                  </div>
                  <div className="ms-2">
                      <img className="wind" src="./public/wind.png"></img>
                      <p className="fw-bold mb-2">2 km/h</p>
                      <p className="m-0">Wind Speed</p>
                  </div>
              </div>
              <div className="d-flex">
                  <div className="text-center w-50">
                      <img className="pressure" src="./public/pressure.png"></img>
                      <p className="fw-bold mb-2">997hPa</p>
                      <p>Pressure</p>
                  </div>
                  <div className="text-center w-50">
                      <img className="uv" src="./public/uv.png"></img>
                      <p className="fw-bold mb-2">8</p>
                      <p>UV</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Summary;