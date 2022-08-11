import { Navigate } from "react-router-dom";

const Logout = function () {
	return fetch("http://localhost:4000/api/logout", { method: "get" })
		.then((res) => {
			res.json("loged out");
			<Navigate to="/login" />;
		})
		.catch((error) => {
			console.log(error);
		});
};

export default Logout;
