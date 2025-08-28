import React from "react";

// Weather code → icon + label
const getWeatherDetails = (code) => {
  if ([0].includes(code)) return { icon: "☀️", label: "Clear Sky" };
  if ([1, 2, 3].includes(code)) return { icon: "⛅", label: "Partly Cloudy" };
  if ([45, 48].includes(code)) return { icon: "🌬️", label: "Fog" };
  if ([51, 53, 55, 56, 57].includes(code)) return { icon: "🌦️", label: "Drizzle" };
  if ([61, 63, 65, 66, 67].includes(code)) return { icon: "🌧️", label: "Rain" };
  if ([71, 73, 75].includes(code)) return { icon: "❄️", label: "Snow" };
  if ([95, 96, 99].includes(code)) return { icon: "⛈️", label: "Thunderstorm" };
  return { icon: "🌡️", label: "Unknown" };
};

function CurrentWeatherCard({ data }) {
  const { icon, label } = getWeatherDetails(data.weathercode);

  return (
    <div className="current-weather-card">
      <h2 className="city-name">{data.city}</h2>

      <p className="time">
        {new Date(data.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>

      <div className="temp-section">
        <span className="temp">{Math.round(data.temperature)}°C</span>
      </div>

      {/* ✅ Weather condition with icon + label */}
      <p className="weather-condition">
        {icon} {label}
      </p>

      <p className="wind">💨 Wind: {Math.round(data.windspeed ?? 0)} km/h</p>

      {/* ✅ Humidity always formatted */}
      <p className="humidity">
        💧 Humidity: {data.humidity !== undefined ? `${Math.round(data.humidity)}%` : "N/A"}
      </p>
    </div>
  );
}

export default CurrentWeatherCard;

