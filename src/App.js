// import logo from './logo.svg';
import "./App.css";
import PrivateRoutes from "./PrivateRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import LogPrivate from "./LogPrivate";
import NotFound from "./pages/Notfound";
function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route element={<PrivateRoutes />}>
				   <Route path="/" index element={<Home />} />
				   <Route path="/about" element={<About />} />
				   <Route path="/Logout" element={<Logout />} />
				</Route>
				<Route element={<LogPrivate />}>
				  <Route path="/login" element={<Login />} index />
				  <Route path="/register" element={<Register />} />
				</Route> 
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
