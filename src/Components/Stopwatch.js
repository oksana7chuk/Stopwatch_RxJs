import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Timer from "./Timer";
import styles from "./Stopwatch.module.css";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [onWait, setOnWait] = useState(false);

  let timer;
  const handleStart = (e) => {
    clearTimeout(timer);
    if (e.detail === 1) {
      timer = setTimeout(() => {
        setIsActive(true);
        setOnWait(false);
      }, 300);
    } else if (e.detail === 2) {
      setIsActive(false);
      setOnWait(true);
    }
  };

  const handleStop = () => {
    setIsActive(false);
    setTime(0);
  };
  const handleReset = () => setTime(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (onWait) {
      clearInterval(interval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, onWait]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>STOPWATCH</p>
      <Timer time={time} />
      <Buttons
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Stopwatch;
