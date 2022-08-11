import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";

const Login = function () {
	const { register, handleSubmit } = useForm();

	// http://localhost:3000

	const SubmitFunction = function (FormData) {
		console.log(FormData);
		// FormData = await fetch("http://localhost:4000/api/login");
	};
	// const onSubmit = (data) => console.log(data);

	return (
		<div className="container">
			<form onSubmit={handleSubmit(SubmitFunction)}>
				<input
					className="text-light"
					{...register("email", {
						required: "email is required",
						minLength: {
							value: 5,
							message: "min value is 5",
						},
					})}
				/>
				{/* <p className="text-light danger "> {error.Email}</p> */}
				<input
					className="text-light"
					type="password"
					{...register("age", {
						min: {
							value: 6,
							message: "minimum is 6",
						},
						max: 99,
					})}
				/>
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
