import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

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
      <WeatherUnits
        fahrenheit={props.data.temperature}
        high={props.data.high}
        low={props.data.low}
        unit={props.unit}
        setUnit={props.setUnit}
      />

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
                  <li><i className="fas fa-sun"></i> Sunrise: <span><Sunrise sunrise={props.data.sunrise} /></span> {" "}</li> 
                  <li><i className="fas fa-moon"></i> Sunset:{" "}
                  <span><Sunset sunset={props.data.sunset} /></span></li>
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