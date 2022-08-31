import Cart from "./components/cart";
import Header from "./components/header";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Cart />
      <AppRoutes />
    </>
  );
}

export default App;
