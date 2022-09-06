import Header from "./components/header";
import { ModalCheckOut } from "./components/modalcheckout";
import { ToasterContainer } from "./components/toaster-container";
import { Providers } from "./contexts";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Header />
      <ModalCheckOut />
      <AppRoutes />
      <ToasterContainer />
    </Providers>
  );
}

export default App;
