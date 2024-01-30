import React from 'react'
import DefaultCity5Days from './DefaultCity5Days';
import './home.css';
import CityData5Days from './CityData5Days';

const Forecast = (props) => {
    const { cityData5Days, defaultCity5Day } = props;
  return (
    <div className='forecast-main'>
        {cityData5Days === null && <DefaultCity5Days defaultCity5Day={defaultCity5Day}/>}
        {cityData5Days !== null && <CityData5Days cityData5Days={cityData5Days}/>}

        
    </div>
  )
}

export default Forecast