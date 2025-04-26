import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [basicData, setBasicData] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    location: "Chicago, IL",
    number: 123456789,
  });

  const [extraData, setExtraData] = useState({
    links: ["github.com/JohnDoe", "linkedin.com/JohnDoe", "johndoe.io"],
    experience: [],
    project: [],
  });

  const handleChangeBasic = (e) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  const handleChangeExtra = () => {
    console.log("Hello");
    setExtraData({});
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <Editor
          data={[basicData, extraData]}
          handleChange={[handleChangeBasic, handleChangeExtra]}
        />
        <Preview data={[basicData, extraData]} />
      </div>
    </>
  );
}

export default App;
