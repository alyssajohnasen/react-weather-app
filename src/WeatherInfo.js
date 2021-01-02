import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
    <div className="row">
        <div className="col">
          <h1>
            <strong>{props.data.city}</strong>
          </h1>
        </div>
      </div>
      <div className="currentDateTime"><FormattedDate date={props.data.date} /></div>
      <div className="description">{props.data.description}</div>
      <span className="currentTemperature">{Math.round(props.data.temperature)}</span>
      <span className="units">
        <a href="/" className="active">°F</a>{" "}
        |<a href="/">°C</a>
      </span>
      <div className="highLowTemps">
        <i className="fas fa-long-arrow-alt-up" />{" "}
        <span className="maxTemp">{Math.round(props.data.high)}</span>° 
        {" "}<i className="fas fa-long-arrow-alt-down" />{" "}
        <span className="minTemp">{Math.round(props.data.low)}</span>°
      </div> 

      <div className="weatherWrapper">  
        <div className="row row-cols-2">
          <div className="col">
            <WeatherIcon code={props.data.icon} />
          </div>  
          <div className="col">
            <div className="details">DETAILS</div>
            <ul>
              <div className="weatherToday">
                <div className="feelsLike">
                  <li><i className="fas fa-temperature-low"></i> Feels Like:{" "}
                  <span className="feelsLike">{Math.round(props.data.feelsLike)}</span>°</li>
                </div>

                <div className="sunrise-sunset">
                  <li><i className="fas fa-sun"></i> Sunrise: <span>{props.data.sunrise}</span> {" "}</li> 
                  <li><i className="fas fa-moon"></i> Sunset:{" "}
                  <span>{props.data.sunset}</span></li>
                </div>

                <div className="humidity-wind">
                  <li><i className="fas fa-tint" /> Humidity:{" "}
                  <span className="humidity">{props.data.humidity}</span>% {" "}</li>
                  <li><i className="fas fa-wind" /> Wind:{" "}
                  <span className="wind"> {Math.round(props.data.wind)} mph </span></li>
                </div>
              </div> 
            </ul>
          </div>    
        </div> 
      </div>
    </div>  
  );
}