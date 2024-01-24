import { useState } from "react";
import ButtonColor from "./ButtonColor";
import { useEffect } from "react";

function App() {
  const [colour, setColour] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <ButtonColor
            color="red"
            setColour={setColour}
          />
          <ButtonColor
            color="green"
            setColour={setColour}
          />
          <ButtonColor
            color="blue"
            setColour={setColour}
          />
          <ButtonColor
            color="olive"
            setColour={setColour}
          />
          <ButtonColor
            color="gray"
            setColour={setColour}
          />
          <ButtonColor
            color="yellow"
            setColour={setColour}
          />
          <ButtonColor
            color="pink"
            setColour={setColour}
          />
          <ButtonColor
            color="purple"
            setColour={setColour}
          />
          <ButtonColor
            color="lavender"
            setColour={setColour}
          />
          <ButtonColor
            color="white"
            setColour={setColour}
          />
          <ButtonColor
            color="black"
            setColour={setColour}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
