import React from 'react';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import {toast} from 'react-hot-toast';
import './home.css';

const FavButton = (props) => {
    const { favCities, setFavCities, cityKey, chosenCity } = props;

    const findCity = favCities.find(x => x.cityKey === chosenCity.cityKey);

    console.log(chosenCity);

    const addToFavToast = () => {
      toast.success(`${chosenCity.cityName} Added to your favorites!`);
    }

    const addToFav = () => {
      if (chosenCity === null) {
        toast.error(`first choose city and then add the city the favorites!`);
      } else {
        setFavCities([...favCities, chosenCity]);
        addToFavToast();
      }
      };
  return (
    <>
    {findCity === undefined && <button onClick={addToFav}>Add to favorites<MdFavoriteBorder size={30}/></button>}
    {findCity !== undefined && <button><MdFavorite size={30}/>Favorite</button>}
    </>
  )
}

export default FavButton