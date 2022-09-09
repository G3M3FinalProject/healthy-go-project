import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ThemeProvider } from "styled-components";

import { LightTheme, DarkTheme } from "../styles/themes";

interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IThemeChildren {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);
export const useAppThemeContext = () => useContext(ThemeContext);

export const AppThemeProvider = ({ children }: IThemeChildren) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");
  console.log(themeName);
  const localTheme = localStorage.getItem("@healthyGo-theme");

  if (!localTheme) localStorage.setItem("@healthyGo-theme", "light");

  useEffect(() => {
    if (localTheme === "light" || localTheme === "dark") {
      setThemeName(localTheme);
    }
  }, []);
  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light",
    );
    const newTheme = localTheme === "light" ? "dark" : "light";
    localStorage.setItem("@healthyGo-theme", newTheme);
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
