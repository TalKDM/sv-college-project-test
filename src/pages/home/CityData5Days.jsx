import React from 'react'
import Loader from '../../components/Loader';

const CityData5Days = (props) => {
    const { cityData5Days } = props;
  return (
    <div className='forecast-main-notNull'>
        {
            cityData5Days === null ?
            (
                <Loader />
            )
            :
            (
                <>
                {
                        cityData5Days.DailyForecasts.map((day, index) => {
                            const dateString = day.Date.slice(0,10);
                            const dateObject = new Date(dateString);
                            const dayOfWeek = dateObject.getDay();
                            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                            const dayName = daysOfWeek[dayOfWeek];
                            return (
                                <div className="forecast-main-null-day" key={index}>
                                    <h2>{dayName}</h2>
                                    <p>{day.Day.IconPhrase}</p>
                                    {
                                    day.Day.Icon >= 0 && day.Day.Icon <= 8 ? 
                                    <img src={`https://developer.accuweather.com/sites/default/files/0${day.Day.Icon}-s.png`} alt={day.WeatherText} />
                                    :
                                    <img src={`https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`} alt={day.WeatherText} />
                                }
                                <h4>{`${Math.round(day.Temperature.Minimum.Value)} °C - ${Math.round(day.Temperature.Maximum.Value)} °C`}</h4>
                                </div>
                            )
                        })
                    }
                </>
            )
        }

        
    </div>
  )
}

export default CityData5Days