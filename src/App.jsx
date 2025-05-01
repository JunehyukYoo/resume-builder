import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import {
  initBasicData,
  initLinks,
  initEducation,
  clearBasicData,
} from "./components/data";
import "./App.css";

function App() {
  const [basicData, setBasicData] = useState(initBasicData);
  const [links, setLinks] = useState(initLinks);
  const [education, setEducation] = useState(initEducation);

  const handleChangeBasic = (e) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  const handleChangeLinks = (e, mode) => {
    e.preventDefault();
    if (mode == "delete") {
      setLinks(links.filter((link) => link.id != e.target.id));
    } else if (mode == "add") {
      const newUrl = e.target.previousElementSibling.value;
      if (newUrl) {
        setLinks([...links, { url: newUrl, id: crypto.randomUUID() }]);
      }
    }
  };

  const handleChangeEducation = (e, mode) => {
    e.preventDefault();
    if (mode == "delete") {
      setEducation(education.filter((edu) => edu.id != e.target.id));
    } else if (mode == "add") {
      console.log("here");
    }
  };

  const handleClearAll = () => {
    setBasicData(clearBasicData);
    setLinks([]);
  };

  const handleReset = () => {
    setBasicData(initBasicData);
    setLinks(initLinks);
  };

  return (
    <div className="app-container">
      <Editor
        data={[basicData, links, education]}
        handleChange={[
          handleChangeBasic,
          handleChangeLinks,
          handleChangeEducation,
          handleClearAll,
          handleReset,
        ]}
      />
      <Preview data={[basicData, links, education]} />
    </div>
  );
}

export default App;
