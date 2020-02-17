import React from 'react';

class Weather extends React.Component {
render(){
  let icon = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;
  return(
    <div>
      <p>{this.props.city}</p>
      <h1>{Math.round(this.props.temp)}℃</h1>
      <img src= {icon} alt="Precipitation"/>
      <p>Precipitation: {this.props.precipitation}</p>
      <p>Feels like: {Math.round(this.props.feels_like)}℃</p>
      <p>Wind: {this.props.wind}m/s</p>
      <p>Humidity: {this.props.humidity}%</p>

    </div>
  )
}
}

export default Weather;