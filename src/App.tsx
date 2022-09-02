<<<<<<< HEAD
=======
import AdressModal from "./components/adress-modal";
>>>>>>> bc39407b5ba6437fa0599138a067c5a71191a778
import Header from "./components/header";
import { Providers } from "./contexts";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Header />
      <AdressModal />
      <AppRoutes />
    </Providers>
  );
}

export default App;
