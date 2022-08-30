import { SeachBar } from "./components/global-inputs";
import Header from "./components/header";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SeachBar />
      <AppRoutes />
    </>
  );
}

export default App;
