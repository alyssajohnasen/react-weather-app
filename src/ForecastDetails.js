import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDetails(props) {
  function hours() {
    let time = new Date(props.data.dt * 1000);
    let localTimeOffset = time.getTimezoneOffset() * 60;
    time.setSeconds(time.getSeconds() + localTimeOffset + props.timezone);
    let hours = time.getHours();
    return (
      `${hours}:00`
    );
  }

  function temperature() {
    let maxTemperature = Math.round(props.data.main.temp_max);
    let minTemperature = Math.round(props.data.main.temp_min);
    if (props.unit === "celsius") {
      maxTemperature = Math.round(((maxTemperature - 32) * 5) / 9);
      minTemperature = Math.round(((minTemperature - 32) * 5) / 9);
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