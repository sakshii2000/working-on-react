import { useState } from "react";
import "./App.css";
import { ToggleProvider } from "./context/ToggleContext";
import { useEffect } from "react";
import Card from "./components/Card";
import Toggle from "./components/Toggle";

function App() {
  const [toggleOption, setToggleOption] = useState("light");

  const lightToggle = () => {
    setToggleOption("light");
  };

  const darkToggle = () => {
    setToggleOption("dark");
  };

  // change toggle in css
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(toggleOption);
  }, [toggleOption]);

  return (
    <ToggleProvider value={{ toggleOption, lightToggle, darkToggle }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Toggle />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ToggleProvider>
  );
}

export default App;
