import {getUserInfo} from "./auth/index"
import React from "react"
import {Outlet} from "react-router-dom"

const LogPrivate = function(){
    const userDetail = getUserInfo()

    return userDetail ?  window.location.href = "/" : <Outlet /> 
}

export default LogPrivate

// import React from "react";
// import { Outlet} from "react-router-dom";
// import {getUserInfo} from "./auth/index"

// const PrivateRoutes = function () {
// 	let usertoken = getUserInfo().token;

// 	return usertoken ? <Outlet /> :  ;
// 	// <Navigate to="/login" />
// };

// export default PrivateRoutes;
