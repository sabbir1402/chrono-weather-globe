
import { cities, City } from "./cityData";

// This would typically use a real API key, but for demo purposes we'll simulate weather data
const weatherConditions = ["Clear", "Clouds", "Rain", "Snow", "Thunderstorm", "Drizzle", "Mist"];
const temperatureRanges = {
  "new-york": { min: -5, max: 25 },
  "london": { min: 0, max: 20 },
  "tokyo": { min: 5, max: 30 },
  "paris": { min: 0, max: 25 },
  "sydney": { min: 10, max: 35 },
  "dubai": { min: 20, max: 45 },
};

export const fetchWeatherForCities = async (): Promise<City[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate mock weather data for each city
  return cities.map(city => {
    const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const range = temperatureRanges[city.id as keyof typeof temperatureRanges] || { min: 0, max: 30 };
    const temperature = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    
    return {
      ...city,
      weather: {
        temperature,
        condition,
        icon: condition === "Rain" || condition === "Snow" || condition === "Thunderstorm" ? "CloudRain" : "CloudSun",
      }
    };
  });
};
