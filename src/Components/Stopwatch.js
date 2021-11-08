import React, { useState, useEffect } from "react";
import { Subject, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Buttons from "./Buttons";
import Timer from "./Timer";
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [buttonName, setButtonName] = useState("Start");

  useEffect(() => {
    !isActive ? setButtonName("Start") : setButtonName("Stop");
    const counter$ = new Subject();
    interval(1000)
      .pipe(takeUntil(counter$))
      .subscribe(() => {
        if (isActive) {
          setTime((prevTime) => prevTime + 1);
        }
      });
    return () => {
      counter$.next();
      counter$.complete();
    };
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive((prevState) => !prevState);
    if (buttonName === "Stop") {
      setTime(0);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  let timer;
  const handleWait = (e) => {
    clearTimeout(timer);
    if (e.detail === 1 && isActive) {
      timer = setTimeout(() => {
        setIsActive(true);
      }, 300);
    } else if (e.detail === 2 && isActive) {
      setIsActive(false);
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(true);
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>STOPWATCH</p>
      <Timer time={time} />
      <Buttons
        handleStartStop={handleStartStop}
        handleWait={handleWait}
        buttonName={buttonName}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Stopwatch;
