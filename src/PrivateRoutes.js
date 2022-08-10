// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = function () {
	let usertoken = new Headers().get("usertoken");

	return usertoken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
