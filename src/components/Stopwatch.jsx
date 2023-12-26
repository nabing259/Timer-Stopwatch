import React, { useEffect, useState } from 'react'
import Displaydata from './Displaydata'
import Button from './Button';
import Reset from './Reset';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [milisec, setMilisec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMilisec((pre) => pre < 99 ? pre + 1 : 0);
     
        if (milisec === 99) {
          setSeconds((pre) => pre + 1);
        }
        if (seconds === 59) {
          setMinutes((pre) => pre + 1);
          setSeconds(0);
        }
      }, 10)
    }
     document.title = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milisec).padStart(2, "0")}`;
    return () => clearInterval(interval);
  }, [isRunning, milisec, seconds]);

  const handleStartPause = () => {
    setIsRunning((pre) => !pre);
  }
  const handleReset = () => {
    setIsRunning(false);
    setMilisec(0);
    setSeconds(0);
    setMinutes(0);
  }
  return (
    <div>
      <div className=" w-[50%] flex m-auto text-center pt-20">
        <div className="m-5">
          <span className="text-5xl font-bold ">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="text-2xl">m</span>
        </div>
        <div className="m-5">
          <span className="text-5xl font-bold">
            {String(seconds).padStart(2, "0")}
          </span>
          <span className="text-2xl">s</span>
        </div>
        <div className="m-5">
          <span className="text-5xl font-bold">
            {String(milisec).padStart(2, "0")}
          </span>
          <span className="text-2xl ">ms</span>
        </div>
      </div>
      <div className="mt-[52px] flex gap-2 m-auto justify-center">
        <Button handleStartPause={handleStartPause} isRunning={isRunning} />
        <Reset handleReset={handleReset} />
      </div>
    </div>
  );
}

export default Stopwatch