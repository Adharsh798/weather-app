🌤️ Weather-App

Project Overview : 
Weather-App is a modern, responsive React.js web application that provides current and hourly weather information for any city worldwide. It leverages the Open-Meteo Weather API for real-time weather data and the Open-Meteo Geocoding API to fetch city suggestions dynamically as users type in the search bar.
The application features a clean glassmorphism interface with a gradient background. Users can search for a city, view detailed current weather data, and scroll through the next 12 hours of forecast.

ChatGPT Assistance :
This project was developed with guidance from ChatGPT. The AI helped in:
Designing the component structure (App, SearchBar, CurrentWeatherCard, HourlyWeatherContainer, HourCard)
Writing the data fetching logic from Open-Meteo APIs
Implementing state management and loading spinner
Styling ideas (glassmorphism + gradient background)
You can view the ChatGPT conversation here:
 https://chatgpt.com/share/68b0a432-e2bc-8002-b199-8bbde07728d3




 
Features & Implementation Details
Dynamic City Search
Live search bar (SearchBar.jsx) fetches city suggestions from Open-Meteo Geocoding API as the user types.
Selecting a city updates the main App state (city & coords) and triggers weather data fetch.
Current Weather Display
CurrentWeatherCard.jsx shows city name, current temperature, humidity, wind speed, and weather condition with intuitive icons (☀️, 🌧️, ⛈️ etc).
Weather codes from API are mapped to descriptive labels and icons for clarity.
Hourly Forecast for Next 12 Hours
HourlyWeatherContainer.jsx displays scrollable hourly cards (HourCard.jsx).
Each card shows time, temperature, weather condition, and humidity.
The app calculates the next 12 hours dynamically based on current time.
State Management & API Integration
Main App.jsx manages state using React useState and useEffect.
Weather data is fetched asynchronously with fetchWeatherData() using async/await.
Includes error handling for failed API requests.
Loading Indicator
A CSS spinner is displayed while data is loading (loading state).
Ensures smooth UX during API calls.
Responsive & Modular Design
Modular components: SearchBar, CurrentWeatherCard, HourlyWeatherContainer, HourCard.
Glassmorphism-style cards with blurred backgrounds for modern aesthetic.
Fully responsive layout for desktop, tablet, and mobile screens.
Deployment-Ready
Can be deployed easily on free hosting platforms like CodeSandbox or StackBlitz.
Clean, well-commented code for easy understanding and maintenance.


 How It Works / Component Flow
App
 ├─ SearchBar  → user selects city → updates App state
 ├─ CurrentWeatherCard  → shows current weather for selected city
 └─ HourlyWeatherContainer
   	└─ HourCard (x12) → shows next 12 hours forecast
Explanation:
App.jsx: Main container; handles state, fetches weather data, and manages the loading spinner.
SearchBar.jsx: Live city search; updates App state when a city is selected.
CurrentWeatherCard.jsx: Displays current weather details.
HourlyWeatherContainer.jsx: Scrollable container for hourly forecast cards.
HourCard.jsx: Displays individual hourly forecast (time, temp, weather, humidity).

Tech Stack
Frontend: React.js+Vite
Styling: CSS (Glassmorphism + Gradient Background)
APIs: Open-Meteo Weather API, Open-Meteo Geocoding API

 
Setup Instructions
Clone the repository
           	Command : git clone <your-github-repo-link>
           	Command : cd Weather-App
Install dependencies
           	Command : npm install
Run the app locally
           	Command : npm run dev
Open the URL provided by Vite (usually http://localhost:5173) in your browser.

Deployment :
The application is deployed and accessible here
 CODESANDBOX LINK :  https://nqxsh3-5173.csb.app/

 GITHUB REPOSITORY LINK : https://github.com/Adharsh798/weather-app.git

 
Notes:
All weather and city data is fetched dynamically using Open-Meteo APIs.
Components are modular and reusable: SearchBar, CurrentWeatherCard, HourlyWeatherContainer, HourCard.
Error handling is included for API failures and empty search results.
Responsive layout ensures usability across devices.
Currently, a gradient background is used for simplicity and performance.
 
THANK YOU




