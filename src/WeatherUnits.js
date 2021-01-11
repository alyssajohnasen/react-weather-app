import React from "react";
import WeatherIcon from "./WeatherIcon";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

import "./WeatherUnits.css";

export default function WeatherUnits(props) {

  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function celsius() {
    return (props.fahrenheit - 32) * 5 / 9;
  }

  if (props.unit === "fahrenheit") {
    return (
      <div className="WeatherUnits">
        <span className="currentTemperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          <span className="active">°F</span>{" "}
          |{" "}<a href="/" onClick={showCelsius}>°C</a>
        </span>
         <div className="highLowTemps">
          <i className="fas fa-long-arrow-alt-up" />{" "}
          <span className="maxTemp">{Math.round(props.high)}</span>° 
          {" "}<i className="fas fa-long-arrow-alt-down" />{" "}
          <span className="minTemp">{Math.round(props.low)}</span>°
        </div> 

        <div className="weatherWrapper">  
          <div className="row row-cols-2">
            <div className="col">
              <WeatherIcon code={props.code} />
            </div>  
            <div className="col">
              <div className="details">DETAILS</div>
              <ul>
                <div className="weatherToday">
                  <div className="feelsLike">
                    <li><i className="fas fa-temperature-low"></i> Feels Like:{" "}
                    <span className="feelsLike">{Math.round(props.feelsLike)}</span>°</li>
                  </div>

                  <div className="sunrise-sunset">
                    <li><i className="fas fa-sun"></i> Sunrise: <span><Sunrise sunrise={props.sunrise} /></span> {" "}</li> 
                    <li><i className="fas fa-moon"></i> Sunset:{" "}
                    <span><Sunset sunset={props.sunset} /></span></li>
                  </div>

                  <div className="humidity-wind">
                    <li><i className="fas fa-tint" /> Humidity:{" "}
                    <span className="humidity">{props.humidity}</span>% {" "}</li>
                    <li><i className="fas fa-wind" /> Wind:{" "}
                    <span className="wind"> {Math.round(props.wind)} mph </span></li>
                  </div>
                </div> 
              </ul>
            </div>    
          </div> 
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <span className="currentTemperature">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>°F</a>{" "}
          |{" "}<span className="active">°C</span>
        </span>
         <div className="highLowTemps">
          <i className="fas fa-long-arrow-alt-up" />{" "}
          <span className="maxTemp">{Math.round(celsius((props.high)))}</span>° 
          {" "}<i className="fas fa-long-arrow-alt-down" />{" "}
          <span className="minTemp">{Math.round(celsius((props.low)))}</span>°
        </div> 
        <div className="weatherWrapper">  
          <div className="row row-cols-2">
            <div className="col">
              <WeatherIcon code={props.code} />
            </div>  
            <div className="col">
              <div className="details">DETAILS</div>
              <ul>
                <div className="weatherToday">
                  <div className="feelsLike">
                    <li><i className="fas fa-temperature-low"></i> Feels Like:{" "}
                    <span className="feelsLike">{Math.round(celsius((props.feelsLike)))}</span>°</li>
                  </div>

                  <div className="sunrise-sunset">
                    <li><i className="fas fa-sun"></i> Sunrise: <span><Sunrise sunrise={props.sunrise} /></span> {" "}</li> 
                    <li><i className="fas fa-moon"></i> Sunset:{" "}
                    <span><Sunset sunset={props.sunset} /></span></li>
                  </div>

                  <div className="humidity-wind">
                    <li><i className="fas fa-tint" /> Humidity:{" "}
                    <span className="humidity">{props.humidity}</span>% {" "}</li>
                    <li><i className="fas fa-wind" /> Wind:{" "}
                    <span className="wind"> {Math.round((props.wind * 1.609))} km/h </span></li>
                  </div>
                </div> 
              </ul>
            </div>    
          </div> 
        </div>
      </div>
    )
  }
}