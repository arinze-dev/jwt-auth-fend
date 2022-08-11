import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = function () {
	let usertoken = new Headers().get("usertoken");

	return usertoken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
