import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Background } from "./Components/Background";
import { Footer } from "./Components/Footer";


function App() {
	return (
		<div className="App">
			{/* Navbar Component we will reuse it in all webpages */}
			<Navbar/>
			{/* Background Component we will reuse it in all webpages */}
			<Background />
			{/* Footer Component we will reuse it in all webpages */}
			<Footer/>
		</div>
	);
}

export default App;
