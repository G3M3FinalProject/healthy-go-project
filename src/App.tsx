import { ThemeProvider } from "styled-components";

import Header from "./components/header";
import { ToasterContainer } from "./components/toaster-container";
import { Providers } from "./contexts";
import { useDarkMode } from "./contexts/darkModeProvider";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/themes/theme";

function App() {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Providers>
        <GlobalStyle />
        <Header theme={theme} />
        <AppRoutes />
        <ToasterContainer />
      </Providers>
    </ThemeProvider>
  );
}

export default App;
