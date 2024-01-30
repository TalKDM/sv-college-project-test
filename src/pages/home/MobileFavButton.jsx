import React from 'react'
import toast from 'react-hot-toast';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

const MobileFavButton = (props) => {
    const { favCities, setFavCities, cityKey, chosenCity } = props;

    const findCity = favCities.find(x => x.cityKey === chosenCity.cityKey);

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
    {findCity === undefined && <button onClick={addToFav}>Add to favorites<MdFavoriteBorder size={20}/></button>}
    {findCity !== undefined && <button><MdFavorite size={20}/>Favorite</button>}
    </>
  )
}

export default MobileFavButton