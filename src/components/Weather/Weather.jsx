import React from 'react';

const Weather = ({temp, icon, city, precipitation, feels_like, wind, humidity}) => {
  let icons = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return(
    <div className="weather">
      <h1>{city}</h1>
      <div className="results">
        <div className="temperature">{Math.round(temp)}°</div>
          <ul className="details">
            <li><img src= {icons} alt="Precipitation"/></li>
            <li>Precipitation: {precipitation}</li>
            <li>Feels like: {Math.round(feels_like)}°</li>
            <li>Wind: {wind}m/s</li>
            <li>Humidity: {humidity}%</li>
          </ul>
      </div>
    </div>
  )

}

export default Weather;