import React from "react";
import tempGif from "./temp.gif";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    description: "Sunny",
    wind: 10,
    temp: 28,
    date: "August 22, 04:30pm",
    today: "Monday",
  };
  return (
    <div className="container">
      <div className="header">
        <h1>My Weather App</h1>
      </div>
      <br />
      <div className="main">
        <div className="row">
          <div className="col-8">
            <div className="search-area">
              <form>
                <input
                  className="search-place"
                  type="search"
                  placeholder="Search your city..."
                  autocomplete="off"
                  autofocus="on"
                />
                <input type="submit" className="search-icon" value="🔍" />

                <div className="temperature">
                  <span className="f">⁰F</span>
                  <span className="vertical">|</span>
                  <span className="c">⁰C</span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-4">
            <div className="current-day">
              <h3 className="current-day-title">{weatherData.today}</h3>
              <span className="current-emoji">
                <img src={tempGif} alt="thermometer" />
              </span>
              <br />
              <span className="current-date">{weatherData.date}</span>
              <br />
              <span className="current-temperature">{weatherData.temp}⁰C</span>
            </div>
          </div>
        </div>
      </div>

      <div className="chosen-city">
        <h3 className="chosen-city-title">
          <span role="img" aria-label="">
            {" "}
            📍
          </span>
          <span className="chosen-city-name" id="chosen-city-name-update">
            &nbsp; {weatherData.city}
          </span>
        </h3>
        <br />
        <ul id="chosen-city-weather-description">
          <i>
            <li className="weather-description">{weatherData.description}</li>
            <li className="weather-wind">
              Wind: <span id="km">{weatherData.wind} km/h</span>
            </li>
          </i>
        </ul>
      </div>
      <button className="myCity">Weather at your Location</button>

      <div className="lower"></div>
      <footer>
        <a
          href="https://github.com/codinglil/weather-react-app1"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Open-source code
        </a>
        {""} by Lilia Gashin
      </footer>
    </div>
  );
}
