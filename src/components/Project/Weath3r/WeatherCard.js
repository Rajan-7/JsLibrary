import React, { useEffect, useState } from "react";

const WeatherCard = ({ weatherinfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    country,
    sunset,
    speed,
  } = weatherinfo;

  let sec = sunset;
  let date = new Date(sec * 1000);
  let dateStr = `${date.getHours()}:${date.getMinutes()}`;

  let time = 'AM';
  let hrs = date.getHours();
  if(hrs >= 12){
    time = 'PM'
  }

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Smoke":
          setWeatherState("wi-smoke");
          break;
        case "Drizzle":
          setWeatherState("wi-rain");
          break;
        case "Haze":
          setWeatherState("wi-day-haze");
          break;
        case "Sunny":
          setWeatherState("wi-day-sunny");
          break;
        case "Windy":
          setWeatherState("wi-day-windy");
          break;
        case "Fog":
          setWeatherState("wi-fog");
          break;
        case "Haze":
          setWeatherState("wi-day-haze");
          break;
        case "Storm":
          setWeatherState("wi-thunderstorm");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  return (
    <>
      <article className="widget">
        <div className="weather-icon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="temperature-info">
          <div className="temp-degree">
            <span>{temp}&deg;</span>
          </div>
          <div className="temp-description">
            <div className="condition">{weathermood}</div>
            <div className="location">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date-info">{new Date().toLocaleString()}</div>

        {/* Four temp section */}
        <div className="temp-four-section">
          <div className="temp-section">
            <div className="temp-icon-left">
              <p className={"wi wi-sunset"}></p>
              <p className="temp-des-right">
                {dateStr}{time}
                <br />
                Sunset
              </p>
            </div>
            <div className="temp-icon-left">
              <p className={"wi wi-humidity"}></p>
              <p className="temp-des-right">
                Humidity
                <br />
                {humidity}g/m^3
              </p>
            </div>
          </div>
          <div className="temp-section">
            <div className="temp-icon-left">
              <p className={"wi wi-barometer"}></p>
              <p className="temp-des-right">
                Pressure
                <br />
                {pressure}Pa
              </p>
            </div>
            <div className="temp-icon-left">
              <p className={"wi wi-strong-wind"}></p>
              <p className="temp-des-right">
                Speed
                <br />
                {speed}m/s
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
