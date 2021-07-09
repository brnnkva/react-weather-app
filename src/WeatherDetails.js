import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(){
    return (
        <ul className="WeatherDetails">
        <li>
          weather: <span id="weather-discription">clear</span>
        </li>
        <li>
          wind: <span id="wind">20</span> km/h
        </li>
        <li>
          humidity: <span id="humidity">46</span> %
        </li>
      </ul>
    );
}