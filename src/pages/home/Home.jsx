import React, { useEffect, useState } from 'react'
import DefaultCity from './DefaultCity';
import CurrentCity from './CurrentCity';
import SearchBar from './SearchBar';
import { MdFavorite } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import './home.css';
import axios from 'axios';
import { apiKey } from '../../data/apiKey';
import FavButton from './FavButton';
import Forecast from './Forecast';
import { FaHome } from "react-icons/fa";
import MobileSearch from './MobileSearch';
import MobileFavButton from './MobileFavButton';

const Home = (props) => {
    const { defaultCity, defaultCity5Day,
        favCities, setFavCities,
        setCityName, cityName,
        cityKey, setCityKey,
        cityData, setCityData,
        cityData5Days, setCityData5Days,
        chosenCity, setChosenCity
        } = props;

        const [openMobileSearch, setOpenMobileSearch] = useState(false);

    const searchCity = async (e) => {
        e.preventDefault();
        if (cityName !== "") {
        const fetchData = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`)
        .then(res => {
            setCityKey(res.data);
        })
        }
    };

    const handleMobileSearch = () => {
        setOpenMobileSearch(!openMobileSearch);
    };

  return (
    <div className='home-main'>
        <div className="home-header">
            <h2>Home Page<FaHome size={30} color='blue'/></h2>
            <div className="home-header-mobileFavButton">
                <MobileFavButton favCities={favCities} setFavCities={setFavCities} cityKey={cityKey} chosenCity={chosenCity} />
            </div>
            <SlMagnifier className='SlMagnifier' size={20} onClick={handleMobileSearch}/>
        </div>
        <div className="home-mobileSearchBar">
        {openMobileSearch && <MobileSearch 
        setCityName={setCityName} 
        cityName={cityName} 
        searchCity={searchCity} 
        cityKey={cityKey} 
        favCities={favCities} 
        setCityData={setCityData} 
        cityData={cityData} 
        setChosenCity={setChosenCity}
        setCityData5Days={setCityData5Days}
        close={handleMobileSearch}
        />}
        </div>
        <div className="home-upper">
            <div className="home-upper-left">
                {cityData === null && <DefaultCity defaultCity={defaultCity}/>}
                {cityData !== null && <CurrentCity cityData={cityData} chosenCity={chosenCity}/>}
            </div>
            <div className="home-upper-searchBar">
                <SearchBar 
                setCityName={setCityName} 
                cityName={cityName} 
                searchCity={searchCity} 
                cityKey={cityKey} 
                favCities={favCities} 
                setCityData={setCityData} 
                cityData={cityData} 
                setChosenCity={setChosenCity}
                setCityData5Days={setCityData5Days}
                />
            </div>
            <div className="home-upper-right">
                <FavButton favCities={favCities} setFavCities={setFavCities} cityKey={cityKey} chosenCity={chosenCity}/>
            </div>
        </div>
        <div className="home-lower">
            <Forecast cityData5Days={cityData5Days} defaultCity5Day={defaultCity5Day} />
        </div>
        
    </div>
  )
}

export default Home