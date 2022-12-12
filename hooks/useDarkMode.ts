import { useState, useEffect } from "react";

type theme = "light" | "dark";

export const useDarkMode = (): [theme, () => void] => {
  const [theme, setTheme] = useState<theme>("light");

  const setMode = (mode: theme) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = (): void => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as theme;
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, themeToggler];
};
