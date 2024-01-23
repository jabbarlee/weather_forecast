import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Weather() {
    const [weather, setWeather] = useState();
    const [wind, setWind] = useState();
    const [icon, setIcon] = useState();
    const [uv, setUv] = useState();
    const [city, setCity] = useState('New York');
    
    const apiKey = "012a9325dc024376aea170509242101";
  
    useEffect(() => {
        const getWeather = () => {
            axios.get('https://api.weatherapi.com/v1/current.json', {
                params: {
                    key: apiKey,
                    q: city
                }
            })
            .then(response => {
                setWeather(response.data.current.temp_f);
                setWind(response.data.current.wind_mph);
                setIcon(response.data.current.condition.icon);
                setUv(response.data.current.uv);
            })
            .catch((error) => {throw error})
        }
    
        getWeather();
    
        const interval = setInterval(() => {
            getWeather();
        }, 1000);

        return () => clearInterval(interval)
    }, [weather])
  return (
    <div className='weather-widget'>
        <div id='temp-side'>
            <img src={icon}/>
            <p id='temp-label'>{weather} °F</p>
            <p>{city}</p>
        </div>
        <div id='info-side'>
            <p className='info-label'>Wind: {wind} mph</p>
            <p className='info-label'>UV Index: {uv}</p>
        </div>
    </div>
  )
}

export default Weather
