import { CheckOut } from "./components/checkout";
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
      <CheckOut />
    </Providers>
  );
}

export default App;
