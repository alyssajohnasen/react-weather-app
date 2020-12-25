import React from "react";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Honolulu",
    date: "Saturday, December 5 | 10:00 AM",
    temperature: 75,
    description: "Partly Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    feelsLike: 77,
    sunrise: "6:00 AM",
    sunset: "5:50 PM",
    high: 80,
    low: 68,
    humidity: 60,
    wind: 10
  };
  return (
    <div className="Weather">
      <SearchEngine />
      <div className="row">
        <div className="col">
          <h1>
            <strong>{weatherData.city}</strong>
          </h1>
        </div>
      </div>
      <div className="currentDateTime">{weatherData.date}</div>
      <div className="description">{weatherData.description}</div>
      <span className="currentTemperature">{weatherData.temperature}</span>
          <span className="units">
            <a href="/" className="active">
              °F
            </a>{" "}
            |<a href="/">°C</a>
          </span>
          <div className="highLowTemps">
              <i className="fas fa-long-arrow-alt-up" />{" "}
              <span className="maxTemp">{weatherData.high}</span>° 
              {" "}<i className="fas fa-long-arrow-alt-down" />{" "}
              <span className="minTemp">{weatherData.low}</span>°
          </div> 

    <div className="weatherWrapper">  
      <div className="row row-cols-2">
         <div className="col">
          <img src={weatherData.imgUrl} alt={weatherData.description} className="currentTempIcon" />
          
        </div>  
     
        
        <div className="col">
          <div className="details">DETAILS</div>
          <ul>
          <div className="weatherToday">
            <div className="feelsLike">
              <li><i className="fas fa-temperature-low"></i> Feels Like:{" "}
              <span className="feelsLike">{weatherData.feelsLike}</span>°</li>
            </div>

            <div className="sunrise-sunset">
              <li><i class="fas fa-sun"></i> Sunrise: <span>{weatherData.sunrise}</span> {" "}</li> 
              <li><i class="fas fa-moon"></i> Sunset:{" "}
              <span>{weatherData.sunset}</span></li>
            </div>

            <div className="humidity-wind">
              <li><i className="fas fa-tint" /> Humidity:{" "}
              <span className="humidity">{weatherData.humidity}</span>% {" "}</li>
              <li><i className="fas fa-wind" /> Wind:{" "}
              <span className="wind"> {weatherData.wind} mph </span></li>
            </div>
        </div> 
        </ul>
      </div>    
     </div>
       
    </div>
    <Forecast />
    </div>
  );
}
