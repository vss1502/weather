import React from 'react';

class Weather extends React.Component {
render(){
  let icon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;
  return(
    <div className="weather">
      <h1>{this.props.city}</h1>
      <div className="results">
        <div className="temperature">{Math.round(this.props.temp)}°</div>
          <div className="item">
            <img src= {icon} alt="Precipitation"/>
            <div>Precipitation: {this.props.precipitation}</div>
            <div>Feels like: {Math.round(this.props.feels_like)}°</div>
            <div>Wind: {this.props.wind}m/s</div>
            <div>Humidity: {this.props.humidity}%</div>
          </div>
      </div>
    </div>
  )
}
}

export default Weather;