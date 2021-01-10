import React, { useState } from "react";
import ForecastDetails from "./ForecastDetails";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <div className="container forecastWrapper">
          <div className="row row-cols-auto weather-forecast">
           <ForecastDetails data={forecast.list[0]} timezone={props.timezone} unit={props.unit} /> 
           <ForecastDetails data={forecast.list[1]} timezone={props.timezone} unit={props.unit} /> 
           <ForecastDetails data={forecast.list[2]} timezone={props.timezone} unit={props.unit} /> 
           <ForecastDetails data={forecast.list[3]} timezone={props.timezone} unit={props.unit} /> 
           <ForecastDetails data={forecast.list[4]} timezone={props.timezone} unit={props.unit} /> 
           <ForecastDetails data={forecast.list[5]} timezone={props.timezone} unit={props.unit} /> 
          </div> 
        </div> 
      </div>
    );
  } else {
    let apiKey = "28aa11ac2c3547ae8dd36de6f31e399a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
