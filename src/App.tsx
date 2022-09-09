import Header from "./components/header";
import { ToasterContainer } from "./components/toaster-container";
import { Providers } from "./contexts";
import { AppThemeProvider, useAppThemeContext } from "./contexts/themeProvider";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const { toggleTheme } = useAppThemeContext();

  return (
    <AppThemeProvider>
      <Providers>
        <GlobalStyle />
        <Header />
        <button onClick={toggleTheme}>cliqe</button>
        <AppRoutes />
        <ToasterContainer />
      </Providers>
    </AppThemeProvider>
  );
}

export default App;
