import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container forecastWrapper">
          <div className="row row-cols-auto weather-forecast">
            <div class="col">
              <h5>
                MON
              </h5>
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather" />
              <div class="weather-forecast-temperature">
                <strong><span id="forecast-max">70</span>°</strong> / <span id="forecast-min">65</span>°
              </div>
          </div>
          <div class="col">
              <h5>
                TUE
              </h5>
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather" />
              <div class="weather-forecast-temperature">
                <strong><span id="forecast-max">70</span>°</strong> / <span id="forecast-min">65</span>°
              </div>
          </div>
          <div class="col">
              <h5>
                WED
              </h5>
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather" />
              <div class="weather-forecast-temperature">
                <strong><span id="forecast-max">70</span>°</strong> / <span id="forecast-min">65</span>°
              </div>
          </div>
          <div class="col">
              <h5>
                THU
              </h5>
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather" />
              <div class="weather-forecast-temperature">
                <strong><span id="forecast-max">70</span>°</strong> / <span id="forecast-min">65</span>°
              </div>
          </div>
          <div class="col">
              <h5>
                FRI
              </h5>
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="weather" />
              <div class="weather-forecast-temperature">
                <strong><span id="forecast-max">70</span>°</strong> / <span id="forecast-min">65</span>°
              </div>
          </div>
       </div> 
      </div> 
    </div>
  );
}
