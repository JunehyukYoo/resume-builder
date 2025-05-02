import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import {
  initBasicData,
  initLinks,
  initEducation,
  initExperience,
  clearBasicData,
} from "./components/data";
import "./App.css";

function App() {
  const [basicData, setBasicData] = useState(initBasicData);
  const [links, setLinks] = useState(initLinks);
  const [education, setEducation] = useState(initEducation);
  const [experience, setExperience] = useState(initExperience);

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

  const handleClearAll = () => {
    setBasicData(clearBasicData);
    setLinks([]);
    setEducation([]);
    setExperience([]);
  };

  const handleReset = () => {
    setBasicData(initBasicData);
    setLinks(initLinks);
    setEducation(initEducation);
    setExperience(initExperience);
  };

  return (
    <div className="app-container">
      <Editor
        data={[basicData, links, education, experience]}
        handleChange={[
          handleChangeBasic,
          handleChangeLinks,
          handleChangeEducation,
          handleChangeExperience,
          handleClearAll,
          handleReset,
        ]}
      />
      <Preview data={[basicData, links, education, experience]} />
    </div>
  );
}

export default App;
