import React from 'react'

function Reset({handleReset}) {
  return (
    <>
      <button onClick={handleReset}>
        <i
          class="fa-solid fa-rotate-right"
          style={{ color: "#ffffff", fontSize: "35px" }}
        ></i>
      </button>
    </>
  );
}

export default Reset