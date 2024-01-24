import { useState } from "react";

function ButtonColor({ color, setColour }) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
      onClick={(e) => {
        setColour(e.target.style.backgroundColor);
      }}>
      {color}
    </button>
  );
}

export default ButtonColor;
