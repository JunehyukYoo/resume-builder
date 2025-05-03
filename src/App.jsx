import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import {
  initBasicData,
  initLinks,
  initEducation,
  initExperience,
  initProjects,
  initSkills,
  initLanguages,
  clearBasicData,
} from "./components/data";
import "./App.css";

function App() {
  const [basicData, setBasicData] = useState(initBasicData);
  const [links, setLinks] = useState(initLinks);
  const [education, setEducation] = useState(initEducation);
  const [experience, setExperience] = useState(initExperience);
  const [projects, setProjects] = useState(initProjects);
  const [skills, setSkills] = useState(initSkills);
  const [languages, setLanguages] = useState(initLanguages);
  console.log(languages);

  const handleChangeBasic = (e) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  const handleChangeLinks = (e, mode) => {
    e.preventDefault();
    if (mode === "delete") {
      setLinks(links.filter((link) => link.id != e.target.id));
    } else if (mode === "add") {
      const newUrl = e.target.previousElementSibling.value;
      if (newUrl) {
        setLinks([...links, { url: newUrl, id: crypto.randomUUID() }]);
      }
    }
  };

  const handleChangeSkills = (e, mode) => {
    e.preventDefault();
    if (mode === "delete") {
      setSkills(skills.filter((skill) => skill.id != e.target.id));
    } else if (mode === "add") {
      const newSkill = e.target.previousElementSibling.value;
      if (newSkill) {
        setSkills([...skills, { name: newSkill, id: crypto.randomUUID() }]);
      }
    }
  };

  const handleChangeLanguages = (e, mode) => {
    e.preventDefault();
    if (mode === "delete") {
      setLanguages(languages.filter((lang) => lang.id != e.target.id));
    } else if (mode === "add") {
      setLanguages([
        ...languages,
        { language: newLang, proficiency: 0, id: crypto.randomUUID() },
      ]);
    } else {
      const thisId = e.target.parentElement.id;
      const thisKey = e.target.name;
      const thisValue = e.target.value;
      setLanguages(
        languages.map((lang) =>
          lang.id === thisId ? { ...lang, [thisKey]: thisValue } : lang
        )
      );
    }
  };

  const handleChangeEducation = (e, mode) => {
    e.preventDefault();
    if (mode === "delete") {
      setEducation(education.filter((edu) => edu.id != e.target.id));
    } else if (mode === "add") {
      setEducation([
        ...education,
        {
          id: crypto.randomUUID(),
          school: "Untitled",
          degree: "",
          major: "",
          gpa: "",
          startDate: "",
          completed: false,
          endDate: "",
          relevantCoursework: "",
        },
      ]);
    } else {
      const thisId = e.target.parentElement.id;
      const thisKey = e.target.name;
      const thisValue = e.target.value;
      setEducation(
        education.map((edu) =>
          edu.id === thisId ? { ...edu, [thisKey]: thisValue } : edu
        )
      );
    }
  };

  const handleChangeExperience = (e, mode) => {
    e.preventDefault();
    if (mode === "delete") {
      setExperience(experience.filter((exp) => exp.id != e.target.id));
    } else if (mode === "add") {
      setExperience([
        ...experience,
        {
          id: crypto.randomUUID(),
          company: "Untitled",
          title: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ]);
    } else {
      const thisId = e.target.parentElement.id;
      const thisKey = e.target.name;
      const thisValue = e.target.value;
      setExperience(
        experience.map((exp) =>
          exp.id === thisId ? { ...exp, [thisKey]: thisValue } : exp
        )
      );
    }
  };

  const handleChangeProjects = (e, mode) => {
    e.preventDefault();
    if (mode === "delete") {
      setProjects(projects.filter((proj) => proj.id != e.target.id));
    } else if (mode === "add") {
      setProjects([
        ...projects,
        {
          id: crypto.randomUUID(),
          title: "Untitled",
          description: "",
          startDate: "",
          endDate: "",
          link: "",
        },
      ]);
    } else {
      const thisId = e.target.parentElement.id;
      const thisKey = e.target.name;
      const thisValue = e.target.value;
      setProjects(
        projects.map((proj) =>
          proj.id === thisId ? { ...proj, [thisKey]: thisValue } : proj
        )
      );
    }
  };

  const handleClearAll = () => {
    setBasicData(clearBasicData);
    setLinks([]);
    setEducation([]);
    setExperience([]);
    setProjects([]);
    setSkills([]);
    setLanguages([]);
  };

  const handleReset = () => {
    setBasicData(initBasicData);
    setLinks(initLinks);
    setEducation(initEducation);
    setExperience(initExperience);
    setProjects(initProjects);
    setSkills(initSkills);
    setLanguages(initLanguages);
  };

  return (
    <div className="app-container">
      <Editor
        data={[
          basicData,
          links,
          education,
          experience,
          projects,
          skills,
          languages,
        ]}
        handleChange={[
          handleChangeBasic,
          handleChangeLinks,
          handleChangeEducation,
          handleChangeExperience,
          handleChangeProjects,
          handleChangeSkills,
          handleChangeLanguages,
          handleClearAll,
          handleReset,
        ]}
      />
      <Preview
        data={[
          basicData,
          links,
          education,
          experience,
          projects,
          skills,
          languages,
        ]}
      />
    </div>
  );
}

export default App;
