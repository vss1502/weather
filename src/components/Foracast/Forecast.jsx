import React, {Component} from 'react';
import moment from 'moment';

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class Forecast extends Component {

  constructor(){
   super();
    this.state={
      weatherDay: []
    };
  }

  componentDidMount() {
    this.getForecast();
   }

  getForecast = async() => {
    const forecastApiLink = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&units=metric&appid=${openWeatherApiKey}`)
    const data = await forecastApiLink.json();
    const weatherDay = data.list.filter(item =>item.dt_txt.includes("12:00:00") );

    this.setState({
     weatherDay
    });
  }
 
  render(){
    return(
      <div>
       <ul className="days">
         {this.state.weatherDay.map((day)=>
          <li className = "day">
            <p>{moment(day.dt_txt).format('dddd, DD')}</p>
            <img src= {`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Precipitation"/> 
            <p>{Math.round(day.main.temp)}°</p> 
          </li>
         )}
       </ul>
      </div>
    )
  }
}

export default Forecast;