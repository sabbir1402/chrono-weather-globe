
import React from "react";
import { cities, City } from "@/utils/cityData";
import CityCard from "./CityCard";
import { fetchWeatherForCities } from "@/utils/weatherService";
import { useQuery } from "@tanstack/react-query";

const WorldClock: React.FC = () => {
  const { data: citiesWithWeather, isLoading, error } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeatherForCities,
    refetchInterval: 300000, // Refetch every 5 minutes
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="text-white/80">Loading city data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 p-4">
        Error loading weather data. Please try again.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {citiesWithWeather?.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default WorldClock;
