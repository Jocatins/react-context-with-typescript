//context
import { AwesomeContextProvider } from "./context/AwesomeContext";

// components
import TieFighter from "./components/TieFighter";

const App = () => {
	return (
		<>
			<AwesomeContextProvider>
				<TieFighter />
			</AwesomeContextProvider>
		</>
	);
};

export default App;
