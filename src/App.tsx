import Header from './components/header';
import GlobalStyle from './styles/GlobalStyles';
import AppRoutes from './routes';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<AppRoutes />
		</>
	);
}

export default App;
