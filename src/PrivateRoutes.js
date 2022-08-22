import React from "react";
import { Outlet} from "react-router-dom";
import {getUserInfo} from "./auth/index"

const PrivateRoutes = function () {
	let usertoken = getUserInfo().token;

	return usertoken ? <Outlet /> :  window.location.href = "/login" ;
	// <Navigate to="/login" />
};

export default PrivateRoutes;
