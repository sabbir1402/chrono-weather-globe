
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { students } from "@/data/studentData";

interface RoomViewProps {
  roomNumber: number;
}

const RoomView: React.FC<RoomViewProps> = ({ roomNumber }) => {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  
  // Get students in this room
  const roomStudents = students.filter(student => student.roomNumber === roomNumber);
  
  // Find max seat number in this room
  const maxSeat = Math.max(...roomStudents.map(student => student.seatNumber));
  
  // Create a map of seats
  const seatMap = new Map();
  roomStudents.forEach(student => {
    seatMap.set(student.seatNumber, student);
  });
  
  // Get student in selected seat
  const selectedStudent = selectedSeat ? seatMap.get(selectedSeat) : null;
  
  // Calculate columns and rows based on the number of seats
  const cols = 5;
  const rows = Math.ceil(maxSeat / cols);
  
  return (
    <Card className="mb-6">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-xl">Room {roomNumber} Layout</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Seating Arrangement</h3>
            <div className="relative border border-gray-200 rounded-lg p-4 bg-gray-50">
              {/* Teacher's desk */}
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-12 bg-green-100 border border-green-200 rounded flex items-center justify-center text-sm">
                  Teacher's Desk
                </div>
              </div>
              
              {/* Student seats */}
              <div 
                className="grid gap-2" 
                style={{ 
                  gridTemplateColumns: `repeat(${cols}, 1fr)`,
                  gridTemplateRows: `repeat(${rows}, 1fr)`
                }}
              >
                {Array.from({ length: maxSeat }, (_, i) => i + 1).map(seatNumber => {
                  const hasStudent = seatMap.has(seatNumber);
                  return (
                    <Button
                      key={seatNumber}
                      variant={selectedSeat === seatNumber ? "default" : "outline"}
                      className={`h-12 ${hasStudent ? "bg-blue-50" : "bg-gray-100 opacity-50"}`}
                      onClick={() => hasStudent && setSelectedSeat(seatNumber)}
                      disabled={!hasStudent}
                    >
                      {seatNumber}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Student Information</h3>
            {selectedStudent ? (
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="font-medium">{selectedStudent.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Roll</p>
                    <p className="font-medium">{selectedStudent.roll}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Department</p>
                    <p className="font-medium">{selectedStudent.department}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Semester</p>
                    <p className="font-medium">{selectedStudent.semester}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">Seat Assignment</p>
                    <p className="font-medium">Room {selectedStudent.roomNumber}, Seat {selectedStudent.seatNumber}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 border rounded-lg bg-gray-50 text-muted-foreground">
                Select a seat to view student details
              </div>
            )}
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Room Information</h4>
              <p className="text-sm">Total Students: {roomStudents.length}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomView;
