import React from 'react';
import Loader from '../../components/Loader';

const DefaultCity = (props) => {
    const { defaultCity } = props;
  return (
    <>
    {
        defaultCity === null ?
        (
            <Loader />
        )
        :
        (
            <>
            <h3>Tel Aviv, israel</h3>

            {defaultCity.map((x, index) => (
                <div key={index}>
                    <h3 key={index}>{`${Math.round(x.Temperature.Metric.Value)} °C`}</h3>
                        {
                            x.WeatherIcon >= 0 && x.WeatherIcon <= 8 ? 
                            <img src={`https://developer.accuweather.com/sites/default/files/0${x.WeatherIcon}-s.png`} alt={x.WeatherText} />
                            :
                            <img src={`https://developer.accuweather.com/sites/default/files/${x.WeatherIcon}-s.png`} alt={x.WeatherText} />
                        }
                            <h3>{x.WeatherText}</h3>
                            </div>
            ))}
            </>
        )
    }
    </>
  )
}

export default DefaultCity