import { GlobalButton, GlobalInput } from "./components/global-inputs";
import Header from "./components/header";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <GlobalButton>Acessar Conta</GlobalButton>
      <GlobalInput placeholder="Senha *" />
      <AppRoutes />
    </>
  );
}

export default App;
