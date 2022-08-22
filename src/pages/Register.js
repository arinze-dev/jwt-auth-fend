import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";

const Register = function () {
	const { register, handleSubmit } = useForm();

	const SubmitFunction = function (FormData) {
		
	   console.log(FormData);
		// const option = {
		// 	body: FormData,
		// 	method: "POST",
		// };

		fetch("http://localhost:4040/api/register",{
			method: 'POST', headers: {
			'Content-Type': 'application/json',},
			body: JSON.stringify(FormData),
		  }).then(res=> res.json()).then(data =>{
			 console.log(data);
			 
		if (data.status == 200) {
			 return window.location.href = "/login"
			}
		   return data
		}
		)};
    

	return (
		<>
			<div className="container">
				<form onSubmit={handleSubmit(SubmitFunction)}>
					<input
					    placeholder="UserName"
						className="text-light"
						{...register("name", { required: "name is required " })}
					/>
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

					<input
						className="text-light"
						placeholder="Password"
				       type="password"
						{...register("password", {
							min: {
								value: 6,
								message: "minimum is 6",
							},
							max: 18,
						})}
					/>

					<input className="text-light" type="submit" />
					<br />

					<p className="text-light">
						already registered? click <Link to="/Login">here</Link> login
					</p>
				</form>
			</div>
		</>
	);
};

export default Register;
