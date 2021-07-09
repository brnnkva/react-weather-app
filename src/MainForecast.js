import React from "react";
import "./MainForecast.css";

export default function MainForecast(){
    return (
        <div className="MainForecast">
        <div className="clearfix main-forecast">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="Clear"
            id="main-icon"
            className="float-left"
          />
          <div className="float-left">
            <span id="temperature">9</span>
            <small id="units">°C</small>
          </div>
        </div>
      </div>
    );
}