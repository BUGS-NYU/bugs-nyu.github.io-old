import React, { useEffect } from "react";
import { lightTheme, darkTheme } from "../utils/theme";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = newValue => {
    const root = window.document.documentElement;
    rawSetColorMode(newValue);

    localStorage.setItem("color-mode", newValue);

    root.style.setProperty(
      "--color-body",
      newValue === "light" ? lightTheme.body : darkTheme.body
    );
    root.style.setProperty(
      "--color-toggleBorder",
      newValue === "light" ? lightTheme.toggleBorder : darkTheme.toggleBorder
    );

    root.style.setProperty(
      "--color-home-border",
      newValue === "light" ? lightTheme.border : darkTheme.border
    );

    root.style.setProperty(
      "--color-contributionContent",
      colorMode === "light"
        ? lightTheme.contributionContent
        : darkTheme.contributionContent
    );

    root.style.setProperty(
      "--color-contributionCircle",
      newValue === "light"
        ? lightTheme.contributionCircle
        : darkTheme.contributionCircle
    );

    root.style.setProperty(
      "--color-primary",
      newValue === "light" ? lightTheme.gradient : darkTheme.gradient
    );
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
