export const initBasicData = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  location: "Chicago, IL",
  number: 123456789,
};

export const clearBasicData = {
  name: "",
  email: "",
  location: "",
  number: "",
};

export const initLinks = [
  { url: "github.com/JohnDoe", id: crypto.randomUUID() },
  { url: "linkedin.com/JohnDoe", id: crypto.randomUUID() },
  { url: "johndoe.com", id: crypto.randomUUID() },
];
