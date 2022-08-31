import Cart from "./components/cart";
import Header from "./components/header";
import { Providers } from "./contexts";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      {/* <Cart /> */}
      <Header />
      <AppRoutes />
    </Providers>
  );
}

export default App;
