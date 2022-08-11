// import { Navbar } from "react-bootstrap";
import "../App.css";

import { Link, Outlet } from "react-router-dom";
const NavBar = function () {
	// const logIndex = useParams();
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
						<Link
							className="nav-link"
							to="http://localhost:4000/api/logout"
							// to="/login"
							//  <Navigate to="/login" />
						>
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
