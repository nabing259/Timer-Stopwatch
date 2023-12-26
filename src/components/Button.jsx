import React from 'react'

function Button({handleStartPause, isRunning}) {
  return (
    <>
      <button onClick={handleStartPause}>
        {isRunning ? (
          <i
            class="fa-regular fa-circle-pause"
            style={{ color: "#ffffff", fontSize: "35px" }}
          ></i>
        ) : (
          <i
            class="fa-solid fa-circle-play"
            style={{ color: "#ffffff", fontSize: "35px" }}
          ></i>
        )}
      </button>
    </>
  );
}

export default Button