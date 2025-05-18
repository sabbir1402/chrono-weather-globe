
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import WorldClock from "@/components/WorldClock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Users, MapPin } from "lucide-react";

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

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Rajshahi Polytechnic Institute</h2>
          <h3 className="text-xl font-semibold mb-4">Exam Seating Plan System</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center">
                  <LogIn className="mr-2 h-5 w-5" /> Student Login
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 text-muted-foreground">
                  Login to see your assigned exam room and seat number.
                </p>
                <Button asChild className="w-full">
                  <Link to="/login">Login to System</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" /> View All Rooms
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 text-muted-foreground">
                  Browse all exam rooms and seating arrangements.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/rooms">View Rooms</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" /> Admin Panel
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4 text-muted-foreground">
                  Administrative access to manage student seating assignments.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/admin">Admin Access</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
