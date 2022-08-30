import Header from "./components/header";
import { Providers } from "./contexts";
import Login from "./pages/login";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Header />
      <Login />
      <AppRoutes />
    </Providers>
  );
}

export default App;
