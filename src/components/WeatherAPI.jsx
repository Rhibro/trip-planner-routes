import React, { useState, useEffect, memo, useMemo } from "react";

export default function WeatherAPI() {
    // use state hook to store weather data and errors
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeatherData = async (lat, lon) => {
        const apiKey = '474327bec75034f19139d861c1a88181';
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        try {
            setLoading(true);
            const response = await fetch(endpoint);
            if(!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherData(latitude, longitude);
                },
                (error) => {
                    setError('Failed to retrieve location. Please enable location services.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        // Automatically fetch weather data on component mount
        getLocation();
      }, []);

    // use useMemo to memoize processed weather data
    const memoizedWeatherData = useMemo(() => {
        if (!weatherData) return null;
        return {
            city: weatherData.name,
            temp: weatherData.main.temp,
            weather: weatherData.weather[0].description,
            windSpeed: weatherData.wind.speed,
        };
    }, [weatherData]);

    return (
        <div>
            {loading && (
                <div>
                    <p>Fetching your location...</p>
                </div>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {memoizedWeatherData && (
                <div className="weatherBox">
                    <p>City: {memoizedWeatherData.city}</p>
                    <p>Temperature: {memoizedWeatherData.temp}°C</p>
                    <p>Weather: {memoizedWeatherData.weather}</p>
                    <p>Wind Speed: {memoizedWeatherData.windSpeed} m/s</p>
                </div>
            )}
        </div>
    )  

}