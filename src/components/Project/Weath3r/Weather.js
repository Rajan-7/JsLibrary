import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import "./style.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("kathmandu");
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ccc58ff68563e40b8123403373a49c53`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { country, sunset } = data.sys;
      const { speed } = data.wind;

      const myNewWeatherData = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        country,
        sunset,
        speed,
      };
      setWeatherInfo(myNewWeatherData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getWeatherInfo();
  },[]);
  return (
    <>
      <div className="search">
        <div className="search-input">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="search-button">
          <button className="btn" type="button" onClick={getWeatherInfo}>
            search
          </button>
        </div>
      </div>

      {/* Widget/Weather Card */}
      <WeatherCard weatherinfo={weatherInfo} />
    </>
  );
};

export default Weather;
