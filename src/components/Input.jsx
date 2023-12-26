import React from 'react'

function Input({value, handleInputChange, set, maxLimit}) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e, set, maxLimit)}
        className="bg-inherit focus:outline-none text-8xl font-bold text-center w-32"
          />
    </>
  );
}

export default Input