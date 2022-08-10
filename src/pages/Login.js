import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { error },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="">
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className="text-light"
					{...register("Name", { required: "name is required " })}
				/>
				<input
					className="text-light"
					{...register("Email", {
						required: "email is required",
						minLength: {
							value: 5,
							message: "min value is 5",
						},
					})}
				/>
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
}
