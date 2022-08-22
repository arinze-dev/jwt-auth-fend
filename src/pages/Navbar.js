// import { Navbar } from "react-bootstrap";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
 import {getUserInfo} from "../auth/index"
    const NavBar = function () {
	   let usertoken= getUserInfo();
	return (
		<>
			<nav className="navbar ">
				<div className="brand-logo"> <h3> Auth-JWT</h3></div>
				<ul>
					{!usertoken ?
					 <> <li> <Link className="nav-link" to="/login">
							login
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/register">
							Register
						</Link>
					</li>
					</>:null} 
                  
					 { usertoken&&
					 <>
					
					<li>
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/logout">
							logout
						</Link>
					</li>
					
					 </>
					
					}
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default NavBar;
