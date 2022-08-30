import { GlobalButton, GlobalInput } from "./components/global-inputs";
import Header from "./components/header";
import { Providers } from "./contexts";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </Providers>
  );
}

export default App;
