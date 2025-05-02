export const initBasicData = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  location: "Chicago, IL",
  number: "1234567890",
  role: "Software Engineer",
};

export const clearBasicData = {
  name: "Name",
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
    id: crypto.randomUUID(),
    school: "Stanford University",
    degree: "M.S.",
    major: "Computer Science",
    gpa: "3.50",
    startDate: "8/2025",
    completed: false,
    endDate: "5/2027",
    relevantCoursework: ["Machine Learning", "Neural Networks"],
  },
  {
    id: crypto.randomUUID(),
    school: "University of Illinois at Urbana-Champaign",
    degree: "B.S.",
    major: "Computer Science",
    gpa: "3.80",
    startDate: "8/2020",
    completed: true,
    endDate: "5/2024",
    relevantCoursework: [
      "Distributed Systems",
      "Algorithms",
      "Models of Computation",
      "Computer Architecture",
    ],
  },
];
