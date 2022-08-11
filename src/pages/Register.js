import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";

const Register = function () {
	const { register, handleSubmit } = useForm();

	// http://localhost:3000

	const SubmitFunction = function (FormData) {
		// const postData = await fetch("http://localhost:4000/api/login");
		console.log(FormData);
	};
	// const onSubmit = (data) => console.log(data);

	return (
		<>
			<div className="content">
				<form onSubmit={handleSubmit(SubmitFunction)}>
					<input
						className="text-light"
						{...register("name", { required: "name is required " })}
					/>
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

					{/* <p className="text-light danger "> {error && error.Email}</p> */}
					<input
						className="text-light"
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
