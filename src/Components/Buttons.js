import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ handleStart, handleStop, handleReset }) => {
  return (
    <div className={styles.buttonsWrap}>
      <button className={styles.button} onClick={handleStart}>
        Start
      </button>
      <button className={styles.button} onClick={handleStop}>
        Stop
      </button>
      <button className={styles.button} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default Buttons;
