import Header from "./components/header";
import { ToasterContainer } from "./components/toaster-container";
import { Providers } from "./contexts";
import { AppThemeProvider } from "./contexts/themeProvider";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <AppThemeProvider>
      <Providers>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <ToasterContainer />
      </Providers>
    </AppThemeProvider>
  );
}

export default App;
