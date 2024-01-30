import React from 'react'
import SearchBarSuggestions from './SearchBarSuggestions';

const SearchBar = (props) => {
    const { setCityName, cityName, searchCity, cityKey, favCities, cityData, setCityData, setChosenCity, setCityData5Days } = props;
  return (
    <>
    <form onChange={searchCity}>
    <input type="text" 
    placeholder='Search City:'
    value={cityName}
    onChange={(e) => setCityName(e.target.value)}
    />
    </form>
    {cityName !== "" && <SearchBarSuggestions cityKey={cityKey} setCityName={setCityName} cityName={cityName} favCities={favCities} cityData={cityData} setCityData={setCityData} setChosenCity={setChosenCity} setCityData5Days={setCityData5Days}/>}
    </>
  )
}

export default SearchBar