import { createContext, useContext } from "react";

export const ToggleContext = createContext({
  toggleOption: "light",
  darkToggle: () => {},
  lightToggle: () => {}
});

export const ToggleProvider = ToggleContext.Provider;

export default function useToggle() {
  return useContext(ToggleContext);
}
