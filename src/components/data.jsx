export const initBasicData = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  location: "Chicago, IL",
  number: "1234567890",
  role: "Software Engineer",
};

export const clearBasicData = {
  name: "",
  email: "",
  location: "",
  number: "",
  role: "",
};

export const initLinks = [
  { url: "github.com/JohnDoe", id: crypto.randomUUID() },
  { url: "linkedin.com/JohnDoe", id: crypto.randomUUID() },
  { url: "johndoe.com", id: crypto.randomUUID() },
];

export const initEducation = [
  {
    school: "Stanford University",
    degree: "Masters",
    major: "Computer Science",
    gpa: "3.50",
    startDate: "8/2025",
    completed: false,
    endDate: "5/2027",
  },
  {
    school: "University of Illinois at Urbana-Champaign",
    degree: "Bachelors",
    major: "Computer Science",
    gpa: "3.80",
    startDate: "8/2020",
    completed: true,
    endDate: "5/2024",
  },
];
