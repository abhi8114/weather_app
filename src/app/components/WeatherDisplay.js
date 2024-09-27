import React from 'react';

export default function WeatherDisplay({ weather }) {
  return (
    <div className="text-center">
        
      <h2 className="text-xl font-semibold mb-2">{weather.name}, {weather.sys.country}</h2>
      <p className="text-4xl font-bold mb-2">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind Speed</p>
          <p>{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}