import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Navbar from "./components/navbar";

function App() {
	return (
		<>
			<div className="bg-stone-100 h-screen">
				<BrowserRouter>
					<Navbar />
					<div className="px-16 py-4">
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
