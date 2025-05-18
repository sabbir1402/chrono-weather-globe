
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";
import { students } from "@/data/studentData";
import RoomView from "@/components/RoomView";

const RoomsView: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState(1);
  const navigate = useNavigate();
  
  // Get unique room numbers
  const rooms = Array.from(new Set(students.map(student => student.roomNumber))).sort((a, b) => a - b);
  
  // Get count of students per room
  const studentsPerRoom = rooms.map(room => {
    return {
      roomNumber: room,
      count: students.filter(student => student.roomNumber === room).length
    };
  });

  const handleLogout = () => {
    sessionStorage.removeItem("currentStudent");
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Exam Rooms - Rajshahi Polytechnic Institute</h1>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Exam Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                {studentsPerRoom.map(room => (
                  <Button
                    key={room.roomNumber}
                    variant={activeRoom === room.roomNumber ? "default" : "outline"}
                    className="justify-between"
                    onClick={() => setActiveRoom(room.roomNumber)}
                  >
                    <span>Room {room.roomNumber}</span>
                    <span className="bg-primary/10 px-2 py-0.5 rounded text-xs">
                      {room.count} students
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-4">
          <RoomView roomNumber={activeRoom} />
          
          <div className="flex gap-4 justify-end">
            <Button variant="outline" onClick={() => navigate("/admin")}>
              View Admin Panel
            </Button>
            <Button onClick={() => navigate("/seating-plan")}>
              Back to My Seating
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsView;
