import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";

import { ThemeProvider } from "styled-components";

import useLocalState from "../components/utils";
import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

interface IThemeContextData {
  toggleTheme: () => void;
  themeName: "light" | "dark";
}
interface IThemeChildren {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider = ({ children }: IThemeChildren) => {
  const [themeName, setThemeName] = useLocalState("theme", "light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light",
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return lightTheme;

    return darkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
