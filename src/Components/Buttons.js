import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ buttonName, handleStartStop, handleWait, handleReset }) => {
  return (
    <div className={styles.buttonsWrap}>
      <button className={styles.button} onClick={handleStartStop}>
        {buttonName}
      </button>
      <button className={styles.button} onClick={handleWait}>
        Wait
      </button>
      <button className={styles.button} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default Buttons;
