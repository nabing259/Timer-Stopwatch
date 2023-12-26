import { useState, useEffect } from 'react';
import React from 'react'
import Displaydata from './Displaydata';
import Input from './Input';
import Button from './Button';
import Reset from './Reset';

function Timer() {
 const [hours, setHours] = useState("00");
 const [minutes, setMinutes] = useState("05");
 const [seconds, setSeconds] = useState("30");
 const [isEditing, setIsEditing] = useState(false);
 const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let interval;

    if (
      !isEditing &&
      isRunning &&
      (hours > 0 || minutes > 0 || seconds > 0)
    ) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(interval);
              setIsRunning(false);
            }
            else {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          }
          else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        }
        else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }
document.title = `${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return () => clearInterval(interval);
  }, [isEditing, isRunning, hours, minutes, seconds]);

  const handleEditClick = () => {
    setIsEditing(true);
    setIsRunning(false);
  };

  const handleInputChange = (e, setter, maxLimit) => {
    let value = parseInt(e.target.value.replace(/\D/g, ""), 10);
    value = isNaN(value) ? " " : Math.min(value, maxLimit);
    setter(value);
  };

  const handleStartPause = () => {
    setIsRunning((prevRunning) => !prevRunning);
    setIsEditing(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours("00");
    setMinutes("05");
    setSeconds("30");
  };

  return (
    <div>
      {isEditing ? (
        <div className="mt-8 p-2">
          <Input
            value={hours}
            handleInputChange={handleInputChange}
            set={setHours}
            maxLimit={59}
          />
          <span className="text-2xl">h</span>
          <Input
            value={minutes}
            handleInputChange={handleInputChange}
            set={setMinutes}
            maxLimit={59}
          />
          <span className="text-2xl">m</span>
          <Input
            value={seconds}
            handleInputChange={handleInputChange}
            set={setSeconds}
            maxLimit={59}
          />
          <span className="text-2xl">s</span>
          <div className="mt-10 flex gap-2 m-auto justify-center">
            <Button
              handleStartPause={handleStartPause}
              isRunning={isRunning}
            />
            <Reset handleReset={handleReset} />
          </div>
        </div>
      ) : (
          <div>
          <div onClick={handleEditClick}>
            <Displaydata hours={hours} minutes={minutes} seconds={seconds} />
          </div>
          <div className="mt-[52px] flex gap-2 m-auto justify-center">
            <Button
              handleStartPause={handleStartPause}
              isRunning={isRunning}
            />
            <Reset handleReset={handleReset} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer