import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import HourlyWeatherContainer from "./components/HourlyWeatherContainer";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Hyderabad");
  const [coords, setCoords] = useState({ lat: 17.385, lon: 78.4867 });
  const [loading, setLoading] = useState(false); // ← added loading state

  // Fetch Weather from Open-Meteo
  const fetchWeatherData = async (lat, lon, cityName = "Hyderabad") => {
    setLoading(true); // start spinner
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&hourly=temperature_2m,relative_humidity_2m,weathercode,windspeed_10m`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();

      let humidity = 0;
      if (data.hourly && data.hourly.time && data.hourly.relative_humidity_2m) {
        const index = data.hourly.time.indexOf(data.current.time);
        humidity = index !== -1 ? data.hourly.relative_humidity_2m[index] : data.hourly.relative_humidity_2m[0];
      }

      const allHourlyData = data.hourly.time.map((time, idx) => ({
        time,
        temp: data.hourly.temperature_2m[idx],
        weatherCode: data.hourly.weathercode[idx],
        humidity: data.hourly.relative_humidity_2m[idx],
      }));

      const now = new Date();
      const next12Hours = allHourlyData.filter((h) => {
        const t = new Date(h.time);
        return t > now && t <= new Date(now.getTime() + 12 * 60 * 60 * 1000);
      });

      setWeatherData({
        city: cityName,
        current: { ...data.current, humidity },
        hourly: next12Hours,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false); // stop spinner
    }
  };

  useEffect(() => {
    fetchWeatherData(coords.lat, coords.lon, "Hyderabad");
  }, []);

  const handleCitySelect = (name, lat, lon, country) => {
    setCity(name);
    setCoords({ lat, lon });
    fetchWeatherData(lat, lon, `${name}, ${country}`);
  };

  return (
    <div className="container">
      <header>Weather Report</header>
      <SearchBar onCitySelect={handleCitySelect} />

      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        weatherData && (
          <>
            <CurrentWeatherCard
              data={{
                city: weatherData.city,
                time: new Date().toISOString(),
                temperature: weatherData.current.temperature_2m,
                weathercode: weatherData.current.weathercode,
                windspeed: weatherData.current.windspeed_10m,
                humidity: weatherData.current.humidity,
              }}
            />
            <HourlyWeatherContainer hourlyData={weatherData.hourly} />
          </>
        )
      )}
    </div>
  );
}

export default App;

