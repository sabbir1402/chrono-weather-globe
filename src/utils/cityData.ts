import { format } from "date-fns";
import { CloudRain, CloudSun } from "lucide-react";
import { LucideIcon } from "lucide-react";

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
    icon: string; // Changed from React.ComponentType to string
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
    id: "los-angeles",
    name: "Los Angeles",
    country: "USA",
    timezone: "America/Los_Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    id: "chicago",
    name: "Chicago",
    country: "USA",
    timezone: "America/Chicago",
    latitude: 41.8781,
    longitude: -87.6298,
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
    id: "manchester",
    name: "Manchester",
    country: "UK",
    timezone: "Europe/London",
    latitude: 53.4808,
    longitude: -2.2426,
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
    id: "osaka",
    name: "Osaka",
    country: "Japan",
    timezone: "Asia/Tokyo",
    latitude: 34.6937,
    longitude: 135.5023,
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
    id: "marseille",
    name: "Marseille",
    country: "France",
    timezone: "Europe/Paris",
    latitude: 43.2965,
    longitude: 5.3698,
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
    id: "melbourne",
    name: "Melbourne",
    country: "Australia",
    timezone: "Australia/Melbourne",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    timezone: "Asia/Dubai",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    country: "UAE",
    timezone: "Asia/Dubai",
    latitude: 24.4539,
    longitude: 54.3773,
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    timezone: "Europe/Berlin",
    latitude: 52.5200,
    longitude: 13.4050,
  },
  {
    id: "munich",
    name: "Munich",
    country: "Germany",
    timezone: "Europe/Berlin",
    latitude: 48.1351,
    longitude: 11.5820,
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    timezone: "Europe/Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    id: "milan",
    name: "Milan",
    country: "Italy",
    timezone: "Europe/Rome",
    latitude: 45.4642,
    longitude: 9.1900,
  },
  {
    id: "toronto",
    name: "Toronto",
    country: "Canada",
    timezone: "America/Toronto",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  {
    id: "vancouver",
    name: "Vancouver",
    country: "Canada",
    timezone: "America/Vancouver",
    latitude: 49.2827,
    longitude: -123.1207,
  },
  {
    id: "moscow",
    name: "Moscow",
    country: "Russia",
    timezone: "Europe/Moscow",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    id: "st-petersburg",
    name: "St. Petersburg",
    country: "Russia",
    timezone: "Europe/Moscow",
    latitude: 59.9343,
    longitude: 30.3351,
  },
  {
    id: "beijing",
    name: "Beijing",
    country: "China",
    timezone: "Asia/Shanghai",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    id: "shanghai",
    name: "Shanghai",
    country: "China",
    timezone: "Asia/Shanghai",
    latitude: 31.2304,
    longitude: 121.4737,
  },
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    id: "sao-paulo",
    name: "São Paulo",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  {
    id: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    timezone: "America/Mexico_City",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    id: "cairo",
    name: "Cairo",
    country: "Egypt",
    timezone: "Africa/Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    timezone: "Africa/Johannesburg",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    id: "johannesburg",
    name: "Johannesburg",
    country: "South Africa",
    timezone: "Africa/Johannesburg",
    latitude: -26.2041,
    longitude: 28.0473,
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    timezone: "Europe/Istanbul",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    timezone: "Asia/Seoul",
    latitude: 37.5665,
    longitude: 126.9780,
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    timezone: "Asia/Bangkok",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    timezone: "Asia/Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    timezone: "Asia/Kolkata",
    latitude: 19.0760,
    longitude: 72.8777,
  },
  {
    id: "new-delhi",
    name: "New Delhi",
    country: "India",
    timezone: "Asia/Kolkata",
    latitude: 28.6139,
    longitude: 77.2090,
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    timezone: "Europe/Amsterdam",
    latitude: 52.3676,
    longitude: 4.9041,
  },
  {
    id: "stockholm",
    name: "Stockholm",
    country: "Sweden",
    timezone: "Europe/Stockholm",
    latitude: 59.3293,
    longitude: 18.0686,
  }
];

export const weatherIcons: Record<string, LucideIcon> = {
  "CloudRain": CloudRain,
  "CloudSun": CloudSun,
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
