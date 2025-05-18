
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, MapPin } from "lucide-react";
import { toast } from "sonner";

interface Student {
  id: number;
  name: string;
  roll: string;
  department: string;
  semester: number;
  roomNumber: number;
  seatNumber: number;
}

const SeatingPlan: React.FC = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const studentData = sessionStorage.getItem("currentStudent");
    if (!studentData) {
      toast.error("Please login to view your seating plan");
      navigate("/login");
      return;
    }
    
    setStudent(JSON.parse(studentData));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("currentStudent");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (!student) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Exam Seating Plan</h1>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-xl">Student Information</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
              <p className="text-lg">{student.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Roll Number</h3>
              <p className="text-lg">{student.roll}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Department</h3>
              <p className="text-lg">{student.department}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Semester</h3>
              <p className="text-lg">{student.semester}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardHeader className="bg-green-100/80">
          <CardTitle className="text-xl flex items-center text-green-800">
            <MapPin className="mr-2 h-5 w-5" />
            Your Exam Seating Assignment
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Room Number</h3>
              <p className="text-3xl font-bold text-green-700">Room {student.roomNumber}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-muted-foreground">Seat Number</h3>
              <p className="text-3xl font-bold text-green-700">Seat {student.seatNumber}</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100 text-amber-800">
            <p className="text-sm">
              <strong>Important:</strong> Please arrive 30 minutes before your exam time. Bring your student ID card and necessary stationery.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeatingPlan;
