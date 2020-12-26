import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Saturday, December 5 | 10:00 AM",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      feelsLike: response.data.main.feels_like,
      sunrise: "6:00 AM",
      sunset: "5:50 PM",
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
    <div className="Weather">
      <form>
        <div className="form-row align-items-center">
          <div className="col-10">
            <input
              type="text"
              className="form-control form-control-sm shadow-sm border-0"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-1">
            <button
              type="submit"
              className=" form-control-sm btn btn-sm btn-light shadow-sm border-0 searchIcon"
            >
              <i className="fas fa-search search-icon" />
            </button>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-sm btn-light shadow-sm">
              <i className="fas fa-map-marker-alt" />
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col">
          <h1>
            <strong>{weatherData.city}</strong>
          </h1>
        </div>
      </div>
      <div className="currentDateTime">{weatherData.date}</div>
      <div className="description">{weatherData.description}</div>
      <span className="currentTemperature">{Math.round(weatherData.temperature)}</span>
          <span className="units">
            <a href="/" className="active">
              °F
            </a>{" "}
            |<a href="/">°C</a>
          </span>
          <div className="highLowTemps">
              <i className="fas fa-long-arrow-alt-up" />{" "}
              <span className="maxTemp">{Math.round(weatherData.high)}</span>° 
              {" "}<i className="fas fa-long-arrow-alt-down" />{" "}
              <span className="minTemp">{Math.round(weatherData.low)}</span>°
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
                  <span className="feelsLike">{Math.round(weatherData.feelsLike)}</span>°</li>
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
                  <span className="wind"> {Math.round(weatherData.wind)} mph </span></li>
                </div>
              </div> 
            </ul>
          </div>    
        </div> 
      </div>
    <Forecast />
    </div>
  );
  } else {
      const apiKey = "28aa11ac2c3547ae8dd36de6f31e399a";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);

      return (
        <div>Loading...
        <Loader type="Bars" color="#2b2f70" height={60} width={60} />
        </div>
      );
    }  
}
