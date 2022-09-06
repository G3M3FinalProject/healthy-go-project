import Header from "./components/header";
import { ToasterContainer } from "./components/toaster-container";
import { Providers } from "./contexts";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Header />
      <AppRoutes />
      <ToasterContainer />
    </Providers>
  );
}

export default App;
