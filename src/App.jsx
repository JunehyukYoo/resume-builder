import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="wrapper">
        <Editor />
        <Preview />
      </div>
    </>
  );
}

export default App;
