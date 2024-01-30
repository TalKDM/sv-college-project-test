import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { apiKey } from './data/apiKey';
import axios from 'axios';

function App() {
  const [favCities, setFavCities] = useState([]);
  const [defaultCity, setDefaultCity] = useState(null);
  const [defaultCity5Day, setDefaultCity5Day] = useState(null);
  const [cityName, setCityName] = useState("");
  const [cityKey, setCityKey] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [cityData5Days, setCityData5Days] = useState(null);
  const [chosenCity, setChosenCity] = useState(null);

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${apiKey}&details=false&metric=true`)
      .then(res => (
        setDefaultCity5Day(res.data)
      ));
    };
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=${apiKey}`)
      .then(res => (
        setDefaultCity(res.data)
      ));
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Toaster position='bottom-center' toastOptions={{duration: 3500}} />
      <Routes>
        <Route path='/' element={<Home 
        defaultCity={defaultCity} defaultCity5Day={defaultCity5Day} favCities={favCities}
        setFavCities={setFavCities} cityName={cityName} setCityName={setCityName}
        cityKey={cityKey} setCityKey={setCityKey} cityData={cityData} setCityData={setCityData}
        cityData5Days={cityData5Days} setCityData5Days={setCityData5Days} chosenCity={chosenCity}
        setChosenCity={setChosenCity}
        />} />
        <Route path='/favorites' element={<Favorites 
        favCities={favCities} setCityData={setCityData} setCityData5Days={setCityData5Days}
        setChosenCity={setChosenCity}
        />} />
      </Routes>
    </div>
  );
}

export default App;
