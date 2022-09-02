import AdressModal from "./components/adress-modal";
import Cart from "./components/cart";
import Header from "./components/header";
import { Providers } from "./contexts";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Header />
      {/* <AdressModal /> */}
      <AppRoutes />
    </Providers>
  );
}

export default App;
