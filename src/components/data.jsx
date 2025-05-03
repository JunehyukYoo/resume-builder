export const initBasicData = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  location: "Chicago, IL",
  number: "1234567890",
  role: "Software Engineer",
};

export const clearBasicData = {
  name: "Untitled",
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
    gpa: "4.0",
    startDate: "2024-08-16",
    endDate: "2026-05-13",
    relevantCoursework: "Machine Learning, Neural Networks",
  },
  {
    id: crypto.randomUUID(),
    school: "University of Illinois at Urbana-Champaign",
    degree: "B.S.",
    major: "Computer Science",
    gpa: "3.8",
    startDate: "2020-08-16",
    endDate: "2024-05-13",
    relevantCoursework:
      "Distributed Systems, Algorithms, Models of Computation, Computer Architecture",
  },
];

export const initExperience = [
  {
    id: crypto.randomUUID(),
    title: "Software Engineer Intern",
    company: "Google",
    location: "Mountain View, CA",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    description:
      "Worked on the Google Search team to improve search algorithms and user experience.",
  },
  {
    id: crypto.randomUUID(),
    title: "Software Engineer Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    description:
      "Developed features for Microsoft Teams and improved performance of existing features.",
  },
];

export const initProjects = [
  {
    id: crypto.randomUUID(),
    title: "Personal Portfolio",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    skillsUsed: "HTML, CSS, JavaScript, React",
  },
  {
    id: crypto.randomUUID(),
    title: "Weather App",
    description:
      "A weather application that provides real-time weather updates.",
    skillsUsed: "HTML, CSS, JavaScript, React, API Integration",
  },
  {
    id: crypto.randomUUID(),
    title: "E-commerce Website",
    description:
      "An e-commerce website with a shopping cart and payment integration.",
    skillsUsed: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
  },
];

export const initSkills = [
  { name: "JavaScript", id: crypto.randomUUID() },
  { name: "React", id: crypto.randomUUID() },
  { name: "Node.js", id: crypto.randomUUID() },
  { name: "Python", id: crypto.randomUUID() },
  { name: "Java", id: crypto.randomUUID() },
  { name: "C++", id: crypto.randomUUID() },
];

export const initLanguages = [
  { language: "English", proficiency: 4, id: crypto.randomUUID() },
  { language: "Mandarin", proficiency: 3, id: crypto.randomUUID() },
  { language: "Spanish", proficiency: 3, id: crypto.randomUUID() },
  { language: "French", proficiency: 1, id: crypto.randomUUID() },
];
