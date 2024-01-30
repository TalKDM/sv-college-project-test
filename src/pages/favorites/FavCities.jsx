import React, { useEffect, useState } from 'react';
import './favorites.css';
import axios from 'axios';
import { apiKey } from '../../data/apiKey';
import { useNavigate } from 'react-router-dom';

const FavCities = (props) => {
    const { favCities, setCityData, setCityData5Days, setChosenCity } = props;

    const nav = useNavigate();


  return (
    <div className='favorites-favCities'>
        {
            favCities.map((x, index) => {
                console.log(x);

                async function chooseCity() {
                    const fetchCityData = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${x.cityKey}?apikey=${apiKey}`)
                    .then(res => {
                        setCityData(res.data)
                        const city = {
                            cityKey: x.cityKey,
                            cityName: x.cityName,
                            countryName: x.countryName,
                            cityTemperature: res.data
                        };
                        setChosenCity(city);
                });
                    const fetch5DaysForecast = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${x.cityKey}?apikey=${apiKey}&details=false&metric=true`)
                    .then(res => {
                        setCityData5Days(res.data);
                    })
                    nav('/')
                };
                
                return (
                    <div className="favorites-favCities-city" key={index} onClick={chooseCity}>
                        <h2>{`${x.cityName}, ${x.countryName}`}</h2>
                        {
                            x.cityTemperature.map((x, index) => {
                                return (
                                    <div key={index}>
                                        <h4>{x.WeatherText}</h4>
                                    {
                                    x.WeatherIcon >= 0 && x.WeatherIcon <= 8 ? 
                                    <img src={`https://developer.accuweather.com/sites/default/files/0${x.WeatherIcon}-s.png`} alt={x.WeatherText} />
                                    :
                                    <img src={`https://developer.accuweather.com/sites/default/files/${x.WeatherIcon}-s.png`} alt={x.WeatherText} />
                                }
                                <h4>{`${Math.round(x.Temperature.Metric.Value)} °C`}</h4>
                                    </div>
                                )
                            })
                        }
                        <div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FavCities