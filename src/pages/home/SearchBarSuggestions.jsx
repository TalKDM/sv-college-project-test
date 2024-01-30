import React, { useState } from 'react'
import Loader from '../../components/Loader';
import './home.css';
import { apiKey } from '../../data/apiKey';
import axios from 'axios';

const SearchBarSuggestions = (props) => {
    const { setCityName, cityName, cityKey, favCities, cityData, setCityData, setChosenCity, setCityData5Days } = props;

  return (
    <div className='home-upper-searchBar-suggestions'>
        {cityKey === null &&
        (
            <Loader />
        )}
        {cityKey !== null &&
        (
            cityKey.filter((val) => {
                if ( cityName === "") {
                return 
                }else if (val.LocalizedName.toLowerCase().includes(cityName.toLowerCase())) {
                    return val
                }
                }).map((val,index) => {
                    const checkIfFav = () => {
                        const isFav = favCities.find(x => x.cityKey === val.Key);
                        if (!isFav) {
                            return "No";
                        } else if (isFav) {
                            return "Yes";
                        }
                    };

                    async function chooseCity() {
                        const fetchCityData = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${val.Key}?apikey=${apiKey}`)
                        .then(res => {
                            const city = {
                                cityKey: val.Key,
                                cityName: val.LocalizedName,
                                countryName: val.Country.LocalizedName,
                                cityTemperature: res.data
                            };
                            setCityData(res.data)
                            setCityName("")
                            setChosenCity(city)
                    });
                        const fetch5DaysForecast = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${val.Key}?apikey=${apiKey}&details=false&metric=true`)
                        .then(res => {
                            setCityData5Days(res.data);
                        })
                    }
                    return (
                        <div onClick={chooseCity} key={index} className='home-upper-searchBar-suggestions-result'>
                            <h4>{`${val.LocalizedName}, ${val.Country.LocalizedName}`}</h4>
                            <h5>{`Favorite City: ${checkIfFav()}`}</h5>
                </div>
                )
            })
        )}
    </div>
  )
}

export default SearchBarSuggestions