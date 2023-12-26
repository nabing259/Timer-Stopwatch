import React from 'react'

function Header({title, active, handleClick}) {
  return (
    <>
      <div
        onClick={() => handleClick(title)}
        style={{
          color: active ? "rgb(96 165 250)" : "grey",
        }}
        className="text-xl "
      >
        {title === "Timer" ? (
          <i
            className="fa-solid fa-hourglass"
            style={{
              color: active ? "rgb(96 165 250)" : "grey",
              marginRight: "5px",
            }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-stopwatch-20"
            style={{
              color: active ? "rgb(96 165 250)" : "grey",
              marginRight: "5px",
            }}
          ></i>
        )}

        {title}
      </div>
    </>
  );
}

export default Header