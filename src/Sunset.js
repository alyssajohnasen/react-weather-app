import React from "react";

export default function Sunset(props) {
  let hours = props.sunset.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.sunset.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span className="Sunset">
      {hours}:{minutes}
    </span>
  )
}