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
    console.log(data);
    const weatherDay = data.list.filter(item =>item.dt_txt.includes("12:00:00") );
   console.log(weatherDay);

   
    this.setState({
     weatherDay
    });
  }
 
  render(){
    console.log(this.state.weatherDay)
    const {weatherDay}=this.state;
    console.log(weatherDay);
   
    
    
 
    return(
      <div>
       <ul className="days">
         {this.state.weatherDay.map((item)=>
          <li className = "day">
            <p>{moment(item.dt_txt).format('dddd, DD')}</p>
            <img src= {`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Precipitation"/> 
            <p>{Math.round(item.main.temp)}°</p> 
          </li>
         )}
       </ul>
      </div>
    )
  }
}

export default Forecast;