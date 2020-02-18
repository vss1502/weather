import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import Date from './components/CurrentDate/CurrentDate';

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      temp: undefined,
      city: undefined,
      sunset: undefined,
      feels_like: undefined,
      wind: undefined,
      humidity: undefined,
      precipitation: undefined,
      icon: undefined
    };
    this.getWeather();
  }

  getWeather = async() => {
    const weatherApiLink = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&mode=json&appid=${openWeatherApiKey}`
    )
    const response = await weatherApiLink.json();
    console.log(response);

    this.setState({
      temp: response.main.temp,
      city: response.name,
      sunset: response.sys.sunset,
      feels_like: response.main.feels_like,
      wind: response.wind.speed,
      humidity: response.main.humidity,
      precipitation: response.weather[0].description,
      icon: response.weather[0].icon
    });
  };

  render(){
    return(
      <div className="App">
        <Date />
        <Weather 
          temp = {this.state.temp}
          city = {this.state.city}
          sunset = {this.state.sunset}
          feels_like = {this.state.feels_like}
          wind = {this.state.wind}
          humidity = {this.state.humidity}
          precipitation = {this.state.precipitation}
          icon = {this.state.icon}
        />
      </div>
    )
  }
}

export default App;
