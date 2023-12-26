import React from 'react'

function Displaydata({hours, minutes, seconds}) {
  return (
    <div className=" w-[50%] flex m-auto text-center pt-20">
      <div className="m-5">
        <span className="text-5xl font-bold ">
          {String(hours).padStart(2, "0")}
        </span>
        <span className="text-2xl">m</span>
      </div>
      <div className="m-5">
        <span className="text-5xl font-bold">
          {String(minutes).padStart(2, "0")}
        </span>
        <span className="text-2xl">s</span>
      </div>
      <div className="m-5">
        <span className="text-5xl font-bold">
          {String(seconds).padStart(2, "0")}
        </span>
        <span className="text-2xl ">ms</span>
      </div>
    </div>
  );
}

export default Displaydata