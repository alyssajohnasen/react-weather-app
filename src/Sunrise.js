import React from "react";

export default function Sunrise(props) {
  let time = new Date();
  let localTimeOffset = time.getTimezoneOffset() * 60;
  time.setSeconds(time.getSeconds() + localTimeOffset + props.sunrise + props.timezone);

  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span className="Sunrise">
      {hours}:{minutes}
    </span>
  )
}