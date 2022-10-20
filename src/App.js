import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [cnt, setCnt] = useState(0);
  const onClick = () => setCnt((prev) => prev + 1);
  console.log("i run all the time")
  const iRun = () => {
    console.log("i run only once.");
  }
  useEffect(iRun, []);
  return (
    <div>
      <h1 className={styles.title}>{cnt}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
