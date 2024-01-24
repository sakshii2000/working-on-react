import { useState } from "react";
import ButtonColor from "./ButtonColor";

function App() {
  const [colour, setColour] = useState("olive");

  const colours = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
    "black"
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {colours.map((colour) => (
            <ButtonColor
              key={colour}
              color={colour}
              setColour={setColour}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
