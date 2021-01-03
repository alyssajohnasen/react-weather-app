import React, { useState } from "react";

import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return (props.fahrenheit - 32) * 5 / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherUnits">
        <span className="currentTemperature">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          <span className="active">°F</span>{" "}
          |{" "}<a href="/" onClick={showCelsius}>°C</a>
        </span>
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
      </div>
    )
  }
}