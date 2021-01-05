import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Loader from 'react-loader-spinner';
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feelsLike: response.data.main.feels_like,
      sunrise: "6:00 AM",
      sunset: "5:50 PM",
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "28aa11ac2c3547ae8dd36de6f31e399a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-10">
            <input
              type="search"
              className="form-control form-control-sm shadow-sm border-0"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-1">
            <button
              type="submit"
              className="form-control-sm btn btn-sm btn-light shadow-sm border-0 searchIcon">
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
      <WeatherInfo data={weatherData} /> 
      <Forecast city={weatherData.city} />
    </div>
  );
  } else {
      search();
      return (
        <Loader type="TailSpin" color="#2b2f70" height={60} width={60} />
      );
    }  
}
