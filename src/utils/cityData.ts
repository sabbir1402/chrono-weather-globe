
import { format } from "date-fns";
import { CloudRain, CloudSun } from "lucide-react";

export interface City {
  id: string;
  name: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;
  weather?: {
    temperature: number;
    condition: string;
    icon: React.ComponentType;
  };
}

export const cities: City[] = [
  {
    id: "new-york",
    name: "New York",
    country: "USA",
    timezone: "America/New_York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    id: "london",
    name: "London",
    country: "UK",
    timezone: "Europe/London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    timezone: "Asia/Tokyo",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    timezone: "Europe/Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    timezone: "Asia/Dubai",
    latitude: 25.2048,
    longitude: 55.2708,
  },
];

const weatherIcons = {
  Clear: CloudSun,
  Clouds: CloudSun,
  Rain: CloudRain,
  Snow: CloudRain,
  Thunderstorm: CloudRain,
  Drizzle: CloudRain,
  Mist: CloudSun,
};

export function formatCityTime(timezone: string): string {
  // Create date with the current time
  const now = new Date();
  
  // Get timezone offset in minutes
  const localOffset = now.getTimezoneOffset() * 60000;
  
  // Convert city timezone string to offset in milliseconds
  let cityOffset = 0;
  try {
    const cityDate = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
    cityOffset = now.getTime() - cityDate.getTime() + localOffset;
  } catch (error) {
    console.error(`Error with timezone ${timezone}:`, error);
  }
  
  // Create date object with the city time
  const cityTime = new Date(now.getTime() - cityOffset);
  
  // Format the time as HH:MM
  return format(cityTime, "HH:mm");
}

export function formatCityDate(timezone: string): string {
  // Create date with the current time
  const now = new Date();
  
  // Get timezone offset in minutes
  const localOffset = now.getTimezoneOffset() * 60000;
  
  // Convert city timezone string to offset in milliseconds
  let cityOffset = 0;
  try {
    const cityDate = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
    cityOffset = now.getTime() - cityDate.getTime() + localOffset;
  } catch (error) {
    console.error(`Error with timezone ${timezone}:`, error);
  }
  
  // Create date object with the city time
  const cityTime = new Date(now.getTime() - cityOffset);
  
  // Format the date as dd MMM
  return format(cityTime, "dd MMM");
}
