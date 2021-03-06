import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Loader from 'react-loader-spinner';
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("fahrenheit");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      timezone: response.data.timezone,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feelsLike: response.data.main.feels_like,
      sunrise: response.data.sys.sunrise + response.data.timezone,
      sunset: response.data.sys.sunset + response.data.timezone,
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

  function searchCurrentLocation(position) {
    let apiKey = "28aa11ac2c3547ae8dd36de6f31e399a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    // apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
    // axios.get(apiUrl).then(displayForecast);
  }

  function handleCurrentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
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
            <button type="button" className="btn btn-sm btn-light shadow-sm" onClick={handleCurrentLocation}>
              <i className="fas fa-map-marker-alt" />
            </button>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} /> 
      <Forecast city={weatherData.city} timezone={weatherData.timezone} unit={unit} />
    </div>
  );
  } else {
      search();
      return (
        <div>
          LOADING...
          <Loader type="TailSpin" color="#2b2f70" height={60} width={60} />
        </div>
      );
    }  
}
