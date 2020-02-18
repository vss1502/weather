import React from 'react';


let date = new Date();

function getWeekDay(date) {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
}

function getMonths(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}
let day = getWeekDay(date)
let month = getMonths(date);
let dateNow = date.getDate();
let year = date.getFullYear();

const CurrentDate = () => {
return(
  <div className="currentDate">
  <p >{day} {dateNow} {month} {year}</p>
  </div>
)
}

export default CurrentDate;