// import logo from './logo.svg';
import "./App.css";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavBar />}>
					<Route element={<PrivateRoutes />}>
						<Route index element={<Home />} />
						<Route path="./about" element={<About />} />
					</Route>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
