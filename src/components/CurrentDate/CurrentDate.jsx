import React from 'react';

const date = new Date().toDateString();

const CurrentDate = () => {
return(
  <div className="currentDate">
    {date}
  </div>
)
}

export default CurrentDate;