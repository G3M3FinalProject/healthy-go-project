import Header from "./components/header";
import { Providers } from "./contexts";
import UserRegister from "./pages/register";
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
