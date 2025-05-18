
interface Student {
  id: number;
  name: string;
  roll: string;
  department: string;
  semester: number;
  roomNumber: number;
  seatNumber: number;
}

// Departments at Rajshahi Polytechnic Institute
const departments = [
  "Computer Technology",
  "Civil Technology",
  "Electrical Technology",
  "Electronics Technology",
  "Mechanical Technology",
  "Power Technology",
  "Architecture Technology",
];

// Generate 185 students
const generateStudents = (): Student[] => {
  const students: Student[] = [];
  let id = 1;
  
  // Distribute students across 10 rooms with approximately 18-19 students per room
  for (let room = 1; room <= 10; room++) {
    const studentsPerRoom = room < 10 ? 19 : 16; // 9 rooms with 19 students + 1 room with 16 = 185 total
    
    for (let seat = 1; seat <= studentsPerRoom; seat++) {
      const departmentIndex = Math.floor(Math.random() * departments.length);
      const semester = Math.floor(Math.random() * 8) + 1; // Semesters 1-8
      
      // Generate roll number in format "RPI-DEPT-YEAR-XXXX"
      const deptCode = departments[departmentIndex].substring(0, 2).toUpperCase();
      const year = new Date().getFullYear().toString().substring(2);
      const serialNum = (id).toString().padStart(4, '0');
      const roll = `RPI-${deptCode}-${year}-${serialNum}`;
      
      students.push({
        id,
        name: getRandomName(),
        roll,
        department: departments[departmentIndex],
        semester,
        roomNumber: room,
        seatNumber: seat
      });
      
      id++;
    }
  }
  
  return students;
};

// List of common Bangladeshi names
const firstNames = [
  "Abdullah", "Abul", "Ahmed", "Akash", "Ali", "Amir", "Anwar", "Arif", "Ashraf", "Azad",
  "Badrul", "Belal", "Farhan", "Farhad", "Farid", "Faisal", "Habib", "Hasan", "Ibrahim", "Imran",
  "Jamal", "Kamal", "Khalid", "Mahmud", "Masud", "Nasir", "Omar", "Rafiq", "Rahim", "Rahman",
  "Rashid", "Reza", "Sabbir", "Saiful", "Salim", "Shahid", "Shakil", "Sharif", "Sohel", "Tarek",
  "Ayesha", "Farzana", "Fatima", "Jasmine", "Laila", "Maliha", "Maryam", "Nasrin", "Nusrat", "Rahima",
  "Razia", "Sabina", "Salma", "Samira", "Sanjida", "Shamima", "Sharmin", "Sultana", "Tahmina", "Zainab"
];

const lastNames = [
  "Ahmed", "Alam", "Ali", "Bhuiyan", "Chowdhury", "Das", "Haque", "Hossain", "Islam", "Jahan",
  "Khan", "Miah", "Mohammad", "Mondol", "Rahman", "Roy", "Sarkar", "Siddique", "Uddin", "Zaman",
  "Begum", "Khatun", "Sultana", "Aktar", "Khanam", "Akter", "Parveen", "Moni", "Jui", "Rina"
];

// Generate a random name
const getRandomName = (): string => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

export const students: Student[] = generateStudents();
