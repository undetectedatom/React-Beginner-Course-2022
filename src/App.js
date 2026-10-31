import { useState } from "react";
import Excuse from "./Excuse";
import "./App.css";

function App() {
  const [excuse, setExcuse] = useState("");

  return (
    <div className="App">
      <h1>Generate An Excucse</h1>
      <Excuse type={"party"} setExcuse={setExcuse} />
      <Excuse type={"family"} setExcuse={setExcuse} />
      <Excuse type={"office"} setExcuse={setExcuse} />
      <p>{excuse}</p>
    </div>
  );
}

export default App;
