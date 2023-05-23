import React, { useState } from 'react';
import './Climate.css'
const Climate = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your OpenWeatherMap API key

  const getWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.log('Error occurred:', error);
      });
  };

  return (
    <div className="weather-app p-5 text-center">
      <h1>Weather in Your City</h1>
      <div className="input-container">
        <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter Your city" />
        <button onClick={getWeather}>Get Weather</button>
      </div>
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}&deg;C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          {weatherData.rain && weatherData.rain['1h'] && <p>Rainfall: {weatherData.rain['1h']} mm</p>}
        </div>
      )}
    </div>
  );
};

export default Climate;
