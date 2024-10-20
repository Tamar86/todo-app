import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import { TodoProvider } from './context/TodoContext';

function App() {
	return (
		<>
			<TodoProvider>
				<GlobalStyles />
				<Layout />
			</TodoProvider>
		</>
	);
}

export default App;
