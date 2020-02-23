import React, {Component} from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import CurrentDate from './components/CurrentDate/CurrentDate';
import Forecast from './components/Foracast/Forecast'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class App extends Component {
  constructor(){
    super();
    this.state={
      temp: null,
      city: null,
      feels_like: null,
      wind: null,
      humidity: null,
      precipitation: null,
      icon: null
    };
  }

  componentDidMount() {
   this.getWeather();
   //this.getForecast();
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
    const {temp, city, feels_like, wind, humidity, precipitation, icon} = this.state;
    return(
      <div className="App">
        <CurrentDate />
        <Weather 
        temp = {temp}
        city = {city}
        feels_like = {feels_like}
        wind = {wind}
        humidity = {humidity}
        precipitation = {precipitation}
        icon = {icon}
        />
        <Forecast />
      </div>
    )
  }
}

export default App;
