import React from "react";

// Reuse same function as CurrentWeatherCard
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

function HourCard({ data }) {
  const time = new Date(data.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const { icon, label } = getWeatherDetails(data.weatherCode);

  return (
    <div className="hour-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <p className="hour">{time}</p>
      <p className="icon-hour">{icon}</p>
      <p className="label-hour">{label}</p> {/* ✅ Added weather description */}
      <p className="temp-hour">{Math.round(data.temp)}°C</p>
      <p className="humidity-hour">💧 {Math.round(data.humidity)}%</p>
    </div>
  );
}

export default HourCard;

