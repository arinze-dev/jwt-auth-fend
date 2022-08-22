import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";

const Login = function () {
	const { register, handleSubmit } = useForm();

	const SubmitFunc = function (FormData) {
			
		
       fetch("http://localhost:4040/api/login",{method:'POST',
          headers: {'Content-Type': 'application/json',},
		  body: JSON.stringify(FormData),} ).then(res =>{ 
          return res.json()
      }).then( data=>{
	   if (data.status === 200) {
		    sessionStorage.setItem("userInfo",JSON.stringify(data))
		    window.location.href = "/"
	   } 
	   console.log(data);
	   return data
	}).catch(err=> console.log(err))
}

    

	return (
		<div className="container">
			<form onSubmit={handleSubmit(SubmitFunc)}>
				<input
					className="text-light"
					placeholder="Email"
					{...register("email", {
						required: "email is required",
						minLength: {
							value: 5,
							message: "min value is 5",
						},
					})}
				/>
				<p className="errorMessage" ></p>
				<input
					className="text-light"
					placeholder="Password"
					type="password"
					{...register("password", {
						min: {
							value: 6,
							message: "minimum is 6",
						},
						max: 99,
					})}
				/>
				<p className="errorMessage" ></p>
				<input className="text-light" type="submit" />
				<br />
				<br />
				<p className="text-light">
					Not registered? click <Link to="/register">here</Link> register
				</p>
			</form>
		</div>
	);
};

export default Login;
