import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Navbar from "./components/navbar";

function App() {
	return (
		<>
			<BrowserRouter>
        <Navbar/>
				<div>
					<Routes>
						<Route path="/" element={<Home/>} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
