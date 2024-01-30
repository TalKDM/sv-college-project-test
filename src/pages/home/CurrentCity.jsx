import React from 'react'
import Loader from '../../components/Loader';

const CurrentCity = (props) => {
  const { cityData, chosenCity } = props;

  console.log(chosenCity);

  return (
    <>
    {
        cityData === null ?
        (
            <Loader />
        )
        :
        (
            <>
            {cityData.map((x, index) => {
              return (
                <div key={index}>
                  <h3>{`${chosenCity.cityName}, ${chosenCity.countryName}`}</h3>
                    <h3 key={index}>{`${Math.round(x.Temperature.Metric.Value)} °C`}</h3>
                        {
                            x.WeatherIcon >= 0 && x.WeatherIcon <= 8 ? 
                            <img src={`https://developer.accuweather.com/sites/default/files/0${x.WeatherIcon}-s.png`} alt={x.WeatherText} />
                            :
                            <img src={`https://developer.accuweather.com/sites/default/files/${x.WeatherIcon}-s.png`} alt={x.WeatherText} />
                        }
                            <h3>{x.WeatherText}</h3>
                            </div>
              )
})}
            </>
        )
    }
    </>
  )
}

export default CurrentCity