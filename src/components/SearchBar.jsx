import React, { useState } from "react";

function SearchBar({ onCitySelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // ✅ Fetch city suggestions
  const fetchSuggestions = async (val) => {
    setQuery(val);
    if (val.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${val}&count=5&language=en&format=json`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.results) setSuggestions(data.results);
    } catch (error) {
      console.error("Failed to fetch city suggestions", error);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search for a city..."
          className="search-input"
          value={query}
          onChange={(e) => fetchSuggestions(e.target.value)}
        />

        {/* ✅ SVG search icon */}
        <span className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </span>
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {suggestions.map((s, idx) => (
            <div
              key={idx}
              className="suggestion-item"
              onClick={() => {
                const cityName = `${s.name}, ${s.country}`;
                onCitySelect(s.name, s.latitude, s.longitude, s.country);
                setQuery(cityName); // ✅ stays inside input
                setSuggestions([]);
              }}
            >
              {s.name}, {s.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
