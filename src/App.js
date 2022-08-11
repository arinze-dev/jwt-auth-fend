// import logo from './logo.svg';
import "./App.css";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
				<Route element={<Login />} path="/login" index />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
