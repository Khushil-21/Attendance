import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Background } from "./Components/Background";
import { Footer } from "./Components/Footer";


function App() {
	return (
		<div className="App">
			<Navbar/>
			<Background />
			<Footer/>
		</div>
	);
}

export default App;
