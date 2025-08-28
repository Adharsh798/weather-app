// import React from "react";
// import HourCard from "./HourCard";

// function HourlyWeatherContainer({ hourlyData }) {
//   return (
//     <div className="hourly-container">
//       {hourlyData.map((hour, idx) => (
//         <HourCard key={idx} data={hour} />
//       ))}
//     </div>
//   );
// }

// export default HourlyWeatherContainer;
// import React from "react";
// import HourCard from "./HourCard";

// function HourlyWeatherContainer({ hourlyData }) {
//   return (
//     <div className="hourly-container">
//       {/* ✅ Heading inside the box, above cards */}
//       <h3 className="hourly-heading">Hourly Weather</h3>

//       {/* ✅ Scrollable row of hour cards */}
//       <div className="hourly-scroll">
//         {hourlyData.map((hour, idx) => (
//           <HourCard key={idx} data={hour} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HourlyWeatherContainer;
import React from "react";
import HourCard from "./HourCard";

function HourlyWeatherContainer({ hourlyData }) {
  return (
    <div className="hourly-container">
      <h3 className="hourly-heading">Next 12 hours Weather Report</h3>

      <div className="hourly-scroll">
        {hourlyData.map((h, idx) => (
          <div className="hour-card" key={idx}>
            <HourCard data={h} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyWeatherContainer;


