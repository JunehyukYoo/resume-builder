import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import {
  initBasicData,
  initLinks,
  //initEducation,
  clearBasicData,
} from "./components/data";
import "./App.css";

function App() {
  const [basicData, setBasicData] = useState(initBasicData);
  const [links, setLinks] = useState(initLinks);
  //const [education, setEducation] = useState(initEducation);

  const handleChangeBasic = (e) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  const handleChangeLinks = (e, mode) => {
    e.preventDefault();
    if (mode == "delete") {
      console.log(e);
      setLinks(links.filter((link) => link.id != e.target.id));
    } else if (mode == "add") {
      const newUrl = e.target.previousElementSibling.value;
      if (newUrl) {
        setLinks([...links, { url: newUrl, id: crypto.randomUUID() }]);
      }
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
        data={[basicData, links]}
        handleChange={[
          handleChangeBasic,
          handleChangeLinks,
          handleClearAll,
          handleReset,
        ]}
      />
      <Preview data={[basicData, links]} />
    </div>
  );
}

export default App;
