// import { Navbar } from "react-bootstrap";
import "../App.css";

import { Link, Outlet } from "react-router-dom";
const NavBar = function () {
	return (
		<>
			<nav className="navbar ">
				<ul>
					<li>
						<Link className="nav-link" to="/login">
							login
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/register">
							Register
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/logout">
							logout
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default NavBar;
