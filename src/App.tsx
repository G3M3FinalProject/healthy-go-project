import Header from "./components/header";
//import Providers from "./contexts/authUserContext";
import { RestaurantedaMamae } from "./pages/restaurantes";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    //<Providers>
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
      <RestaurantedaMamae />
    </>
    //</Providers>
  );
}

export default App;
