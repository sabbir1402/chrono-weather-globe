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
  },
  
  // Additional cities from around the world
  {
    id: "madrid",
    name: "Madrid",
    country: "Spain",
    timezone: "Europe/Madrid",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    timezone: "Europe/Madrid",
    latitude: 41.3851,
    longitude: 2.1734,
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    timezone: "Europe/Lisbon",
    latitude: 38.7223,
    longitude: -9.1393,
  },
  {
    id: "athens",
    name: "Athens",
    country: "Greece",
    timezone: "Europe/Athens",
    latitude: 37.9838,
    longitude: 23.7275,
  },
  {
    id: "vienna",
    name: "Vienna",
    country: "Austria",
    timezone: "Europe/Vienna",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    id: "brussels",
    name: "Brussels",
    country: "Belgium",
    timezone: "Europe/Brussels",
    latitude: 50.8503,
    longitude: 4.3517,
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
    id: "warsaw",
    name: "Warsaw",
    country: "Poland",
    timezone: "Europe/Warsaw",
    latitude: 52.2297,
    longitude: 21.0122,
  },
  {
    id: "prague",
    name: "Prague",
    country: "Czech Republic",
    timezone: "Europe/Prague",
    latitude: 50.0755,
    longitude: 14.4378,
  },
  {
    id: "budapest",
    name: "Budapest",
    country: "Hungary",
    timezone: "Europe/Budapest",
    latitude: 47.4979,
    longitude: 19.0402,
  },
  {
    id: "copenhagen",
    name: "Copenhagen",
    country: "Denmark",
    timezone: "Europe/Copenhagen",
    latitude: 55.6761,
    longitude: 12.5683,
  },
  {
    id: "oslo",
    name: "Oslo",
    country: "Norway",
    timezone: "Europe/Oslo",
    latitude: 59.9139,
    longitude: 10.7522,
  },
  {
    id: "helsinki",
    name: "Helsinki",
    country: "Finland",
    timezone: "Europe/Helsinki",
    latitude: 60.1699,
    longitude: 24.9384,
  },
  {
    id: "dublin",
    name: "Dublin",
    country: "Ireland",
    timezone: "Europe/Dublin",
    latitude: 53.3498,
    longitude: -6.2603,
  },
  {
    id: "zurich",
    name: "Zurich",
    country: "Switzerland",
    timezone: "Europe/Zurich",
    latitude: 47.3769,
    longitude: 8.5417,
  },
  {
    id: "geneva",
    name: "Geneva",
    country: "Switzerland",
    timezone: "Europe/Zurich",
    latitude: 46.2044,
    longitude: 6.1432,
  },
  // Middle East & Asia
  {
    id: "jerusalem",
    name: "Jerusalem",
    country: "Israel",
    timezone: "Asia/Jerusalem",
    latitude: 31.7683,
    longitude: 35.2137,
  },
  {
    id: "tel-aviv",
    name: "Tel Aviv",
    country: "Israel",
    timezone: "Asia/Jerusalem",
    latitude: 32.0853,
    longitude: 34.7818,
  },
  {
    id: "riyadh",
    name: "Riyadh",
    country: "Saudi Arabia",
    timezone: "Asia/Riyadh",
    latitude: 24.7136,
    longitude: 46.6753,
  },
  {
    id: "doha",
    name: "Doha",
    country: "Qatar",
    timezone: "Asia/Qatar",
    latitude: 25.2854,
    longitude: 51.5310,
  },
  {
    id: "kuwait-city",
    name: "Kuwait City",
    country: "Kuwait",
    timezone: "Asia/Kuwait",
    latitude: 29.3759,
    longitude: 47.9774,
  },
  {
    id: "jakarta",
    name: "Jakarta",
    country: "Indonesia",
    timezone: "Asia/Jakarta",
    latitude: -6.2088,
    longitude: 106.8456,
  },
  {
    id: "manila",
    name: "Manila",
    country: "Philippines",
    timezone: "Asia/Manila",
    latitude: 14.5995,
    longitude: 120.9842,
  },
  {
    id: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    timezone: "Asia/Kuala_Lumpur",
    latitude: 3.1390,
    longitude: 101.6869,
  },
  {
    id: "taipei",
    name: "Taipei",
    country: "Taiwan",
    timezone: "Asia/Taipei",
    latitude: 25.0330,
    longitude: 121.5654,
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    country: "China",
    timezone: "Asia/Hong_Kong",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  {
    id: "hanoi",
    name: "Hanoi",
    country: "Vietnam",
    timezone: "Asia/Ho_Chi_Minh",
    latitude: 21.0285,
    longitude: 105.8542,
  },
  {
    id: "ho-chi-minh-city",
    name: "Ho Chi Minh City",
    country: "Vietnam",
    timezone: "Asia/Ho_Chi_Minh",
    latitude: 10.8231,
    longitude: 106.6297,
  },
  // Africa
  {
    id: "lagos",
    name: "Lagos",
    country: "Nigeria",
    timezone: "Africa/Lagos",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    timezone: "Africa/Nairobi",
    latitude: -1.2921,
    longitude: 36.8219,
  },
  {
    id: "casablanca",
    name: "Casablanca",
    country: "Morocco",
    timezone: "Africa/Casablanca",
    latitude: 33.5731,
    longitude: -7.5898,
  },
  {
    id: "tunis",
    name: "Tunis",
    country: "Tunisia",
    timezone: "Africa/Tunis",
    latitude: 36.8065,
    longitude: 10.1815,
  },
  {
    id: "addis-ababa",
    name: "Addis Ababa",
    country: "Ethiopia",
    timezone: "Africa/Addis_Ababa",
    latitude: 9.0320,
    longitude: 38.7469,
  },
  {
    id: "dar-es-salaam",
    name: "Dar es Salaam",
    country: "Tanzania",
    timezone: "Africa/Dar_es_Salaam",
    latitude: -6.7924,
    longitude: 39.2083,
  },
  // South America
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    timezone: "America/Argentina/Buenos_Aires",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    id: "santiago",
    name: "Santiago",
    country: "Chile",
    timezone: "America/Santiago",
    latitude: -33.4489,
    longitude: -70.6693,
  },
  {
    id: "lima",
    name: "Lima",
    country: "Peru",
    timezone: "America/Lima",
    latitude: -12.0464,
    longitude: -77.0428,
  },
  {
    id: "bogota",
    name: "Bogota",
    country: "Colombia",
    timezone: "America/Bogota",
    latitude: 4.7110,
    longitude: -74.0721,
  },
  {
    id: "quito",
    name: "Quito",
    country: "Ecuador",
    timezone: "America/Guayaquil",
    latitude: -0.1807,
    longitude: -78.4678,
  },
  {
    id: "caracas",
    name: "Caracas",
    country: "Venezuela",
    timezone: "America/Caracas",
    latitude: 10.4806,
    longitude: -66.9036,
  },
  // North & Central America
  {
    id: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    timezone: "America/Mexico_City",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    id: "havana",
    name: "Havana",
    country: "Cuba",
    timezone: "America/Havana",
    latitude: 23.1136,
    longitude: -82.3666,
  },
  {
    id: "panama-city",
    name: "Panama City",
    country: "Panama",
    timezone: "America/Panama",
    latitude: 8.9833,
    longitude: -79.5167,
  },
  {
    id: "san-jose",
    name: "San Jose",
    country: "Costa Rica",
    timezone: "America/Costa_Rica",
    latitude: 9.9281,
    longitude: -84.0907,
  },
  // Oceania
  {
    id: "auckland",
    name: "Auckland",
    country: "New Zealand",
    timezone: "Pacific/Auckland",
    latitude: -36.8485,
    longitude: 174.7633,
  },
  {
    id: "wellington",
    name: "Wellington",
    country: "New Zealand",
    timezone: "Pacific/Auckland",
    latitude: -41.2865,
    longitude: 174.7762,
  },
  {
    id: "suva",
    name: "Suva",
    country: "Fiji",
    timezone: "Pacific/Fiji",
    latitude: -18.1416,
    longitude: 178.4419,
  },
  {
    id: "honolulu",
    name: "Honolulu",
    country: "USA",
    timezone: "Pacific/Honolulu",
    latitude: 21.3069,
    longitude: -157.8583,
  },
  // Additional countries with minimum representation
  {
    id: "reykjavik",
    name: "Reykjavik",
    country: "Iceland",
    timezone: "Atlantic/Reykjavik",
    latitude: 64.1466,
    longitude: -21.9426,
  },
  {
    id: "zagreb",
    name: "Zagreb",
    country: "Croatia",
    timezone: "Europe/Zagreb",
    latitude: 45.8150,
    longitude: 15.9819,
  },
  {
    id: "bucharest",
    name: "Bucharest",
    country: "Romania",
    timezone: "Europe/Bucharest",
    latitude: 44.4268,
    longitude: 26.1025,
  },
  {
    id: "sofia",
    name: "Sofia",
    country: "Bulgaria",
    timezone: "Europe/Sofia",
    latitude: 42.6977,
    longitude: 23.3219,
  },
  {
    id: "ljubljana",
    name: "Ljubljana",
    country: "Slovenia",
    timezone: "Europe/Ljubljana",
    latitude: 46.0569,
    longitude: 14.5058,
  },
  {
    id: "bratislava",
    name: "Bratislava",
    country: "Slovakia",
    timezone: "Europe/Bratislava",
    latitude: 48.1486,
    longitude: 17.1077,
  },
  {
    id: "tallinn",
    name: "Tallinn",
    country: "Estonia",
    timezone: "Europe/Tallinn",
    latitude: 59.4370,
    longitude: 24.7536,
  },
  {
    id: "riga",
    name: "Riga",
    country: "Latvia",
    timezone: "Europe/Riga",
    latitude: 56.9496,
    longitude: 24.1052,
  },
  {
    id: "vilnius",
    name: "Vilnius",
    country: "Lithuania",
    timezone: "Europe/Vilnius",
    latitude: 54.6872,
    longitude: 25.2797,
  },
  {
    id: "minsk",
    name: "Minsk",
    country: "Belarus",
    timezone: "Europe/Minsk",
    latitude: 53.9006,
    longitude: 27.5590,
  },
  {
    id: "kyiv",
    name: "Kyiv",
    country: "Ukraine",
    timezone: "Europe/Kiev",
    latitude: 50.4501,
    longitude: 30.5234,
  },
  {
    id: "chisinau",
    name: "Chisinau",
    country: "Moldova",
    timezone: "Europe/Chisinau",
    latitude: 47.0105,
    longitude: 28.8638,
  },
  {
    id: "tbilisi",
    name: "Tbilisi",
    country: "Georgia",
    timezone: "Asia/Tbilisi",
    latitude: 41.7151,
    longitude: 44.8271,
  },
  {
    id: "yerevan",
    name: "Yerevan",
    country: "Armenia",
    timezone: "Asia/Yerevan",
    latitude: 40.1792,
    longitude: 44.4991,
  },
  {
    id: "baku",
    name: "Baku",
    country: "Azerbaijan",
    timezone: "Asia/Baku",
    latitude: 40.4093,
    longitude: 49.8671,
  },
  {
    id: "astana",
    name: "Astana",
    country: "Kazakhstan",
    timezone: "Asia/Almaty",
    latitude: 51.1694,
    longitude: 71.4491,
  },
  {
    id: "bishkek",
    name: "Bishkek",
    country: "Kyrgyzstan",
    timezone: "Asia/Bishkek",
    latitude: 42.8747,
    longitude: 74.5698,
  },
  {
    id: "dushanbe",
    name: "Dushanbe",
    country: "Tajikistan",
    timezone: "Asia/Dushanbe",
    latitude: 38.5598,
    longitude: 68.7870,
  },
  {
    id: "ashgabat",
    name: "Ashgabat",
    country: "Turkmenistan",
    timezone: "Asia/Ashgabat",
    latitude: 37.9601,
    longitude: 58.3262,
  },
  {
    id: "tashkent",
    name: "Tashkent",
    country: "Uzbekistan",
    timezone: "Asia/Tashkent",
    latitude: 41.2995,
    longitude: 69.2401,
  },
  {
    id: "ulaanbaatar",
    name: "Ulaanbaatar",
    country: "Mongolia",
    timezone: "Asia/Ulaanbaatar",
    latitude: 47.8864,
    longitude: 106.9057,
  },
  {
    id: "pyongyang",
    name: "Pyongyang",
    country: "North Korea",
    timezone: "Asia/Pyongyang",
    latitude: 39.0392,
    longitude: 125.7625,
  },
  {
    id: "dhaka",
    name: "Dhaka",
    country: "Bangladesh",
    timezone: "Asia/Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    id: "kathmandu",
    name: "Kathmandu",
    country: "Nepal",
    timezone: "Asia/Kathmandu",
    latitude: 27.7172,
    longitude: 85.3240,
  },
  {
    id: "thimphu",
    name: "Thimphu",
    country: "Bhutan",
    timezone: "Asia/Thimphu",
    latitude: 27.4712,
    longitude: 89.6339,
  },
  {
    id: "colombo",
    name: "Colombo",
    country: "Sri Lanka",
    timezone: "Asia/Colombo",
    latitude: 6.9271,
    longitude: 79.8612,
  },
  {
    id: "male",
    name: "Male",
    country: "Maldives",
    timezone: "Indian/Maldives",
    latitude: 4.1755,
    longitude: 73.5093,
  },
  {
    id: "kabul",
    name: "Kabul",
    country: "Afghanistan",
    timezone: "Asia/Kabul",
    latitude: 34.5553,
    longitude: 69.2075,
  },
  {
    id: "islamabad",
    name: "Islamabad",
    country: "Pakistan",
    timezone: "Asia/Karachi",
    latitude: 33.6844,
    longitude: 73.0479,
  },
  {
    id: "phnom-penh",
    name: "Phnom Penh",
    country: "Cambodia",
    timezone: "Asia/Phnom_Penh",
    latitude: 11.5564,
    longitude: 104.9282,
  },
  {
    id: "vientiane",
    name: "Vientiane",
    country: "Laos",
    timezone: "Asia/Vientiane",
    latitude: 17.9757,
    longitude: 102.6331,
  },
  {
    id: "yangon",
    name: "Yangon",
    country: "Myanmar",
    timezone: "Asia/Yangon",
    latitude: 16.8661,
    longitude: 96.1951,
  },
  // Africa - additional countries
  {
    id: "algiers",
    name: "Algiers",
    country: "Algeria",
    timezone: "Africa/Algiers",
    latitude: 36.7538,
    longitude: 3.0588,
  },
  {
    id: "luanda",
    name: "Luanda",
    country: "Angola",
    timezone: "Africa/Luanda",
    latitude: -8.8383,
    longitude: 13.2344,
  },
  {
    id: "ouagadougou",
    name: "Ouagadougou",
    country: "Burkina Faso",
    timezone: "Africa/Ouagadougou",
    latitude: 12.3714,
    longitude: -1.5197,
  },
  {
    id: "yaounde",
    name: "Yaoundé",
    country: "Cameroon",
    timezone: "Africa/Douala",
    latitude: 3.8480,
    longitude: 11.5021,
  },
  {
    id: "bangui",
    name: "Bangui",
    country: "Central African Republic",
    timezone: "Africa/Bangui",
    latitude: 4.3947,
    longitude: 18.5582,
  },
  {
    id: "ndjamena",
    name: "N'Djamena",
    country: "Chad",
    timezone: "Africa/Ndjamena",
    latitude: 12.1348,
    longitude: 15.0557,
  },
  {
    id: "kinshasa",
    name: "Kinshasa",
    country: "Congo DRC",
    timezone: "Africa/Kinshasa",
    latitude: -4.4419,
    longitude: 15.2663,
  },
  {
    id: "djibouti",
    name: "Djibouti",
    country: "Djibouti",
    timezone: "Africa/Djibouti",
    latitude: 11.8251,
    longitude: 42.5903,
  },
  {
    id: "asmara",
    name: "Asmara",
    country: "Eritrea",
    timezone: "Africa/Asmara",
    latitude: 15.3229,
    longitude: 38.9251,
  },
  {
    id: "libreville",
    name: "Libreville",
    country: "Gabon",
    timezone: "Africa/Libreville",
    latitude: 0.4162,
    longitude: 9.4673,
  },
  {
    id: "accra",
    name: "Accra",
    country: "Ghana",
    timezone: "Africa/Accra",
    latitude: 5.6037,
    longitude: -0.1870,
  },
  {
    id: "conakry",
    name: "Conakry",
    country: "Guinea",
    timezone: "Africa/Conakry",
    latitude: 9.6412,
    longitude: -13.5784,
  },
  {
    id: "abidjan",
    name: "Abidjan",
    country: "Ivory Coast",
    timezone: "Africa/Abidjan",
    latitude: 5.3600,
    longitude: -4.0083,
  },
  {
    id: "monrovia",
    name: "Monrovia",
    country: "Liberia",
    timezone: "Africa/Monrovia",
    latitude: 6.3004,
    longitude: -10.7969,
  },
  {
    id: "tripoli",
    name: "Tripoli",
    country: "Libya",
    timezone: "Africa/Tripoli",
    latitude: 32.8872,
    longitude: 13.1913,
  },
  {
    id: "antananarivo",
    name: "Antananarivo",
    country: "Madagascar",
    timezone: "Indian/Antananarivo",
    latitude: -18.8792,
    longitude: 47.5079,
  },
  {
    id: "bamako",
    name: "Bamako",
    country: "Mali",
    timezone: "Africa/Bamako",
    latitude: 12.6392,
    longitude: -8.0029,
  },
  {
    id: "nouakchott",
    name: "Nouakchott",
    country: "Mauritania",
    timezone: "Africa/Nouakchott",
    latitude: 18.0735,
    longitude: -15.9582,
  },
  {
    id: "maputo",
    name: "Maputo",
    country: "Mozambique",
    timezone: "Africa/Maputo",
    latitude: -25.9692,
    longitude: 32.5732,
  },
  {
    id: "windhoek",
    name: "Windhoek",
    country: "Namibia",
    timezone: "Africa/Windhoek",
    latitude: -22.5609,
    longitude: 17.0658,
  },
  {
    id: "niamey",
    name: "Niamey",
    country: "Niger",
    timezone: "Africa/Niamey",
    latitude: 13.5117,
    longitude: 2.1251,
  },
  {
    id: "kigali",
    name: "Kigali",
    country: "Rwanda",
    timezone: "Africa/Kigali",
    latitude: -1.9403,
    longitude: 30.0598,
  },
  {
    id: "dakar",
    name: "Dakar",
    country: "Senegal",
    timezone: "Africa/Dakar",
    latitude: 14.7645,
    longitude: -17.3660,
  },
  {
    id: "freetown",
    name: "Freetown",
    country: "Sierra Leone",
    timezone: "Africa/Freetown",
    latitude: 8.4657,
    longitude: -13.2317,
  },
  {
    id: "mogadishu",
    name: "Mogadishu",
    country: "Somalia",
    timezone: "Africa/Mogadishu",
    latitude: 2.0469,
    longitude: 45.3182,
  },
  {
    id: "khartoum",
    name: "Khartoum",
    country: "Sudan",
    timezone: "Africa/Khartoum",
    latitude: 15.5007,
    longitude: 32.5599,
  },
  {
    id: "juba",
    name: "Juba",
    country: "South Sudan",
    timezone: "Africa/Juba",
    latitude: 4.8594,
    longitude: 31.5713,
  },
  {
    id: "dodoma",
    name: "Dodoma",
    country: "Tanzania",
    timezone: "Africa/Dar_es_Salaam",
    latitude: -6.1630,
    longitude: 35.7516,
  },
  {
    id: "lome",
    name: "Lomé",
    country: "Togo",
    timezone: "Africa/Lome",
    latitude: 6.1319,
    longitude: 1.2228,
  },
  {
    id: "kampala",
    name: "Kampala",
    country: "Uganda",
    timezone: "Africa/Kampala",
    latitude: 0.3476,
    longitude: 32.5825,
  },
  {
    id: "lusaka",
    name: "Lusaka",
    country: "Zambia",
    timezone: "Africa/Lusaka",
    latitude: -15.3875,
    longitude: 28.3228,
  },
  {
    id: "harare",
    name: "Harare",
    country: "Zimbabwe",
    timezone: "Africa/Harare",
    latitude: -17.8252,
    longitude: 31.0335,
  },
  // South & Central America - additional countries
  {
    id: "la-paz",
    name: "La Paz",
    country: "Bolivia",
    timezone: "America/La_Paz",
    latitude: -16.4897,
    longitude: -68.1193,
  },
  {
    id: "asuncion",
    name: "Asunción",
    country: "Paraguay",
    timezone: "America/Asuncion",
    latitude: -25.2637,
    longitude: -57.5759,
  },
  {
    id: "montevideo",
    name: "Montevideo",
    country: "Uruguay",
    timezone: "America/Montevideo",
    latitude: -34.9011,
    longitude: -56.1915,
  },
  {
    id: "georgetown",
    name: "Georgetown",
    country: "Guyana",
    timezone: "America/Guyana",
    latitude: 6.8013,
    longitude: -58.1553,
  },
  {
    id: "paramaribo",
    name: "Paramaribo",
    country: "Suriname",
    timezone: "America/Paramaribo",
    latitude: 5.8520,
    longitude: -55.2038,
  },
  {
    id: "cayenne",
    name: "Cayenne",
    country: "French Guiana",
    timezone: "America/Cayenne",
    latitude: 4.9227,
    longitude: -52.3269,
  },
  {
    id: "managua",
    name: "Managua",
    country: "Nicaragua",
    timezone: "America/Managua",
    latitude: 12.1364,
    longitude: -86.2514,
  },
  {
    id: "tegucigalpa",
    name: "Tegucigalpa",
    country: "Honduras",
    timezone: "America/Tegucigalpa",
    latitude: 14.0723,
    longitude: -87.1921,
  },
  {
    id: "san-salvador",
    name: "San Salvador",
    country: "El Salvador",
    timezone: "America/El_Salvador",
    latitude: 13.6929,
    longitude: -89.2182,
  },
  {
    id: "guatemala-city",
    name: "Guatemala City",
    country: "Guatemala",
    timezone: "America/Guatemala",
    latitude: 14.6349,
    longitude: -90.5069,
  },
  {
    id: "belmopan",
    name: "Belmopan",
    country: "Belize",
    timezone: "America/Belize",
    latitude: 17.2514,
    longitude: -88.7590,
  },
  {
    id: "port-au-prince",
    name: "Port-au-Prince",
    country: "Haiti",
    timezone: "America/Port-au-Prince",
    latitude: 18.5944,
    longitude: -72.3074,
  },
  {
    id: "santo-domingo",
    name: "Santo Domingo",
    country: "Dominican Republic",
    timezone: "America/Santo_Domingo",
    latitude: 18.4861,
    longitude: -69.9312,
  },
  {
    id: "kingston",
    name: "Kingston",
    country: "Jamaica",
    timezone: "America/Jamaica",
    latitude: 18.0179,
    longitude: -76.8099,
  },
  {
    id: "nassau",
    name: "Nassau",
    country: "Bahamas",
    timezone: "America/Nassau",
    latitude: 25.0343,
    longitude: -77.3963,
  },
  {
    id: "bridgetown",
    name: "Bridgetown",
    country: "Barbados",
    timezone: "America/Barbados",
    latitude: 13.1132,
    longitude: -59.5988,
  },
  {
    id: "port-of-spain",
    name: "Port of Spain",
    country: "Trinidad and Tobago",
    timezone: "America/Port_of_Spain",
    latitude: 10.6596,
    longitude: -61.5019,
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
