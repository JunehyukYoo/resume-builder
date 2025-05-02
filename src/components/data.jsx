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
    startDate: "2024-08-16",
    completed: false,
    endDate: "2026-05-13",
    relevantCoursework: "Machine Learning, Neural Networks",
  },
  {
    id: crypto.randomUUID(),
    school: "University of Illinois at Urbana-Champaign",
    degree: "B.S.",
    major: "Computer Science",
    gpa: "3.80",
    startDate: "2020-08-16",
    completed: true,
    endDate: "2024-05-13",
    relevantCoursework:
      "Distributed Systems, Algorithms, Models of Computation, Computer Architecture",
  },
];
