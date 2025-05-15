
import React, { useState } from "react";
import { cities, City } from "@/utils/cityData";
import CityCard from "./CityCard";
import { fetchWeatherForCities } from "@/utils/weatherService";
import { useQuery } from "@tanstack/react-query";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const WorldClock: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter cities based on search term
  const filteredCities = citiesWithWeather?.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    city.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-white/60" />
        </div>
        <Input
          type="text"
          placeholder="Search by city or country..."
          className="bg-background/40 border-none w-full pl-10 text-white focus-visible:ring-1 focus-visible:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {filteredCities && filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      ) : (
        <div className="text-center p-8 text-white/80">
          No cities found matching "{searchTerm}".
        </div>
      )}
    </div>
  );
};

export default WorldClock;
