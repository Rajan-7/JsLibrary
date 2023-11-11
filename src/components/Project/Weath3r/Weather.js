import React from "react";
import "./style.css";

const Weather = () => {
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
          />
        </div>
        <div className="search-button">
          <button className="btn" type="button">
            search
          </button>
        </div>
      </div>

      {/* Widget Card */}
      <article className="widget">
        <div className="weather-icon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="temperature-info">
          <div className="temp-degree">
            <span>25.5&deg;</span>
          </div>
          <div className="temp-description">
            <div className="condition">Sunny</div>
            <div className="location">Ktm,Np</div>
          </div>
        </div>
        <div className="date-info">{new Date().toLocaleString()}</div>

        {/* Four temp section */}
        <div className="temp-four-section">
          <div className="temp-section">
            <div className="temp-icon">
              <p className={"wi wi-day-rain"}></p>
            </div>
            <div className="temp-des">
              19:19PM
              <br />
              Rain
            </div>
          </div>
          <div className="temp-section">
            <div className="temp-icon">
              <p className={"wi wi-day-rain"}></p>
            </div>
            <div className="temp-des">
              19:19PM
              <br />
              Rain
            </div>
          </div>
          <div className="temp-section">
            <div className="temp-icon">
              <p className={"wi wi-day-rain"}></p>
            </div>
            <div className="temp-des">
              19:19PM
              <br />
              Rain
            </div>
          </div>
          <div className="temp-section">
            <div className="temp-icon">
              <p className={"wi wi-day-rain"}></p>
            </div>
            <div className="temp-des">
              19:19PM
              <br />
              Rain
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weather;
