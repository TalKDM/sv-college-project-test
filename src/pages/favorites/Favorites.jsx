import React from 'react';
import FavCities from './FavCities';
import { MdFavorite } from "react-icons/md";


const Favorites = (props) => {
  const { favCities, setCityData, setCityData5Days, setChosenCity } = props;
  return (
    <div className='favorites-main'>
      <div className="favorites-header">
      <h2>Favorites Cities</h2>
      <MdFavorite size={30} color='red'/>
      </div>
      <div className="favorites-content">
      {favCities.length === 0 && <p>No Favorites cities yes!</p>}
      {favCities.length !== 0 && <FavCities favCities={favCities} setCityData={setCityData} setCityData5Days={setCityData5Days} setChosenCity={setChosenCity}/>}
      </div>
    </div>
  )
}

export default Favorites