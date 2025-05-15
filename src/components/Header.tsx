
import React from "react";
import { Clock, MapPin } from "lucide-react";

const Header: React.FC = () => {
  const [localTime, setLocalTime] = React.useState<string>("");
  const [localDate, setLocalDate] = React.useState<string>("");

  React.useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setLocalDate(now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }));
    };

    updateLocalTime();
    const interval = setInterval(updateLocalTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="py-8 mb-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="bg-primary/20 p-2 rounded-full">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Chrono Weather Globe
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>Your Location</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <div className="text-xl font-semibold">{localTime}</div>
              <div className="text-xs text-white/70">{localDate}</div>
            </div>
          </div>
        </div>
        <p className="text-center text-white/70 max-w-2xl mx-auto">
          Real-time clocks and weather conditions for major cities around the world.
          All times and weather information update automatically.
        </p>
      </div>
    </header>
  );
};

export default Header;
