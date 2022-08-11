import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";

const Login = function () {
	const { register, handleSubmit } = useForm();

	const SubmitFunc = function (FormData) {
		console.log(FormData);

		const option = {
			body: FormData,
			method: "post",
		};
		fetch("http://localhost:4000/api/login", option).then((res) => {
			console.log(res.json());
		});
	};
	// const onSubmit = (data) => console.log(data);

	return (
		<div className="container">
			<form onSubmit={handleSubmit(SubmitFunc)}>
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
					{...register("password", {
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
