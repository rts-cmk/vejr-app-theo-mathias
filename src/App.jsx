import { useState } from "react";
import "./css/main.css";

import SearchInput from "./components/SearchInput";
import WeatherInfo from "./components/WeatherInfo";

const API_KEY = import.meta.env.VITE_API_KEY

export default function App() {
  const [by, setBy] = useState(null);
  const [temperatur, setTemperatur] = useState(null);
  const [følesSom, setFølesSom] = useState(null);
  

  async function findBy(cityInput) {
    setBy(cityInput);

    const cityFinder = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=2&appid=${API_KEY}`;
    const res1 = await fetch(cityFinder);
    const data1 = await res1.json();

    const lat = data1[0].lat.toString();
    const lon = data1[0].lon.toString();

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const res2 = await fetch(weatherUrl);
    const data2 = await res2.json();

    setTemperatur(data2.main.temp.toFixed(1) + "°");
    setFølesSom(data2.main.feels_like.toFixed(1) + "°");

    const futureWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const res3 = await fetch(futureWeather)
    const data3 = await res3.json()
    data3.list.map(data67 => {
      console.log(data67);
      
    })
    
  }

  return (
    <main className="weather-main">
      <SearchInput onSearch={findBy} />
      <div className="weather-container">
        <WeatherInfo by={by} temperatur={temperatur} følesSom={følesSom} />
      </div>
    </main>
  );
}
