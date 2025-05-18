
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { students } from "@/data/studentData";

const AdminView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const navigate = useNavigate();
  
  // Get unique room numbers
  const rooms = Array.from(new Set(students.map(student => student.roomNumber))).sort((a, b) => a - b);
  
  // Filter students based on search and selected room
  const filteredStudents = students.filter(student => {
    const matchesSearch = searchTerm === "" || 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRoom = selectedRoom === null || student.roomNumber === selectedRoom;
    
    return matchesSearch && matchesRoom;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin View - Exam Seating Plan</h1>
        <Button onClick={() => navigate("/login")}>Back to Login</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="col-span-1 md:col-span-3">
          <CardHeader className="pb-3">
            <CardTitle>Search Students</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Search by name, roll, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Filter by Room</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant={selectedRoom === null ? "default" : "outline"}
                onClick={() => setSelectedRoom(null)}
                className="mb-2"
              >
                All
              </Button>
              {rooms.map(room => (
                <Button
                  key={room}
                  variant={selectedRoom === room ? "default" : "outline"}
                  onClick={() => setSelectedRoom(room)}
                  className="mb-2"
                >
                  Room {room}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Student Seating Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Roll</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead>Seat</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.roll}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.department}</TableCell>
                    <TableCell>{student.semester}</TableCell>
                    <TableCell>Room {student.roomNumber}</TableCell>
                    <TableCell>Seat {student.seatNumber}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {filteredStudents.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No students found matching your search criteria.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminView;
