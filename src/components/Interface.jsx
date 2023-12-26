import Timer from './Timer'
import Stopwatch from './Stopwatch'
import Header from './Header'
import React, { useState } from 'react'

function Interface() {
  const tabs = ["Timer","Stopwatch"];
  const [active, setActive] = useState("Timer");

  const handleTab = (title) => {
    setActive(title);
  }

    return (
      <div className="w-[50vw] border-2 m-auto h-[60vh] rounded-lg">
        <div className="flex justify-around border-b-2 p-3">
          {tabs.map((title) => (
            <Header
              key={title}
              active={title === active}
              handleClick={() => handleTab(title)}
              title={title}
            />
          ))}
        </div>
        <div>
          {active === "Timer" && <Timer />}
          {active === "Stopwatch" && <Stopwatch />}
        </div>
      </div>
    );
}

export default Interface