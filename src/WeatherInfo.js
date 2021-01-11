import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnits from "./WeatherUnits";

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
      <div className="currentDateTime"><FormattedDate timezone={props.data.timezone} /></div>
      <div className="description">{props.data.description}</div>
      <WeatherUnits
        fahrenheit={props.data.temperature}
        high={props.data.high}
        low={props.data.low}
        feelsLike={props.data.feelsLike}
        sunrise={props.data.sunrise}
        sunset={props.data.sunset}
        humidity={props.data.humidity}
        wind={props.data.wind}
        code={props.data.icon}
        unit={props.unit}
        setUnit={props.setUnit}
      />
    </div>  
  );
}