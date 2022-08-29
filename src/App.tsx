import DropDownModal from "./components/dropdown-header";
import Header from "./components/header";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <DropDownModal />
      <AppRoutes />
    </>
  );
}

export default App;
