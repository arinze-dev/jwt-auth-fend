import { Link } from "react-router-dom";

import React from "react";
import { useForm } from "react-hook-form";
// import {ErrorMessage } from "../component/Message"
import { toast } from "react-toastify"
const Login = function () {
	const { register, handleSubmit, formState:{errors} } = useForm();

	const SubmitFunc = function (FormData) {
    fetch("http://localhost:4040/api/login",{method:'POST',
          headers: {'Content-Type': 'application/json',},
		  body: JSON.stringify(FormData)}).then(res =>{ 
		if (res.ok) {
			return res.json();
		}
		return res.json().then((err)=>{		
			throw new Error(err)
		})
      }).then( data=>{
		    sessionStorage.setItem("userInfo",JSON.stringify(data))
		    window.location.href = "/home"
	}).catch(error=> {
		console.log(error.message)
       if (error.message==="wrong email try angin"||error.message==="wrong password try angin") {
		return toast.error(error.message,{position: toast.POSITION.TOP_CENTER})
	   }
		// return error
	})};

    

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
				<p className="error" >{errors?.email?.message}</p>
				<input className="text-light" placeholder="Password"
					type="password"
					{...register("password", { required: "email is required",
						minLength: {value: 6, message: "minimum is 6",},
						max: 20,
					})}
				/>
				<p className="error" >{errors?.password?.message}</p>

				<input className="text-light" type="submit" />
				<br />
				<p className="text-light">
					Not registered? click <Link to="/register">here</Link> register
				</p>
			</form>
		</div>
	);
};

export default Login;
