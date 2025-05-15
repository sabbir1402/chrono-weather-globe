
import React from "react";
import { City, weatherIcons } from "@/utils/cityData";
import { formatCityTime, formatCityDate } from "@/utils/cityData";
import { Card, CardContent } from "@/components/ui/card";
import { CloudSun } from "lucide-react";

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const [time, setTime] = React.useState(formatCityTime(city.timezone));
  const date = formatCityDate(city.timezone);

  // Update the time every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatCityTime(city.timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [city.timezone]);
  
  const WeatherIcon = city.weather?.icon ? weatherIcons[city.weather.icon] : CloudSun;
  
  return (
    <Card className="glass overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white">{city.name}</h2>
              <p className="text-sm text-white/80">{city.country}</p>
            </div>
            {city.weather && (
              <div className="flex items-center">
                <WeatherIcon className={`h-8 w-8 mr-1 ${city.weather.icon === "CloudRain" ? "text-weather-rainy" : "text-weather-sunny"}`} />
                <span className="text-xl font-semibold">
                  {city.weather.temperature}°C
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-4 flex flex-col items-center">
            <div className="text-5xl font-bold tracking-tighter animate-pulse-slow">
              {time}
            </div>
            <div className="text-sm text-white/70 mt-1">
              {date}
            </div>
          </div>
          
          <div className="mt-2 text-xs text-white/60">
            {city.weather?.condition}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CityCard;
