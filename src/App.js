import React from "react";
import styles from "./App.module.css";
import Stopwatch from "./Components/Stopwatch";

const App = () => {
  return (
    <div className={styles.App}>
      <Stopwatch />
    </div>
  );
};

export default App;
