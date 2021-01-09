import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDetails(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return (
      `${hours}:00`
    );
  }

  function temperature() {
    let maxTemperature = Math.round(props.data.main.temp_max);
    let minTemperature = Math.round(props.data.main.temp_min);
    if (props.unit === "celsius") {
      maxTemperature = (maxTemperature - 32) * 5 / 9;
      minTemperature = (minTemperature - 32) * 5 / 9;
    } 
    return (
      `${maxTemperature}° / ${minTemperature}°`
    );
  }

  return (
    <div className="ForecastDetails col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}