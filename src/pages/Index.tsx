
import React from "react";
import Header from "@/components/Header";
import WorldClock from "@/components/WorldClock";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen pb-12">
      <Header />
      <main className="container mx-auto px-4">
        <WorldClock />
        
        <div className="mt-12 p-6 glass rounded-xl">
          <h2 className="text-2xl font-bold mb-4">About Chrono Weather Globe</h2>
          <p className="mb-4">
            Chrono Weather Globe provides real-time clock and weather information for major cities around the world. 
            This application helps you keep track of time differences and weather conditions in different regions.
          </p>
          <p className="text-white/70">
            The weather data is updated every 5 minutes, while the clocks are synchronized with each city's local time zone.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
