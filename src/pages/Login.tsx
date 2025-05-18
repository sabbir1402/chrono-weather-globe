
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Login: React.FC = () => {
  const [studentName, setStudentName] = useState("");
  const [roll, setRoll] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!studentName || !roll) {
      toast.error("Please enter both name and roll number");
      setIsLoading(false);
      return;
    }

    // Check if student exists in our data
    import("@/data/studentData").then(({ students }) => {
      const student = students.find(
        (s) => s.name.toLowerCase() === studentName.toLowerCase() && s.roll === roll
      );

      if (student) {
        // Store student info in session storage
        sessionStorage.setItem("currentStudent", JSON.stringify(student));
        toast.success("Login successful!");
        navigate("/seating-plan");
      } else {
        toast.error("Invalid credentials. Please check your name and roll number.");
      }
      setIsLoading(false);
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Student Login</CardTitle>
          <CardDescription>
            Rajshahi Polytechnic Institute Exam Seating Plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Student Name
              </label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="roll" className="text-sm font-medium">
                Roll Number
              </label>
              <Input
                id="roll"
                placeholder="Enter your roll number"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-muted-foreground">
          Contact administration if you can't access your account
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
