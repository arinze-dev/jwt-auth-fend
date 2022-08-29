import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import React from "react";
import { useForm } from "react-hook-form";

const Register = function () {
	const { register, handleSubmit,formState:{errors}} = useForm();

	const SubmitFunction = function (FormData) {
		fetch("http://localhost:4040/api/register",{
			method: 'POST', headers: {'Content-Type': 'application/json',},body: JSON.stringify(FormData),
		  }).then(res=>{
			 if (res.ok) {
				return res.json()
			 }
			 return res.json().then(err=>{ throw new Error(err)})
		  }).then(data =>{		 
		return window.location.href = "/login"
	   }).catch(error=> {
		 console.log();
		if (error.message==="Name already Exist ⚡"||error.message==="Email already Exist ⚡") {
			return toast.error(error.message,{position: toast.POSITION.TOP_CENTER})
		   }
	   })};
    
    
	return (
		<>
		 <div className="container">

				<form onSubmit={handleSubmit(SubmitFunction)}>
			<input placeholder="UserName" className="text-light"
						{...register("name", { required: "Name is required ",
						 minLength:{value: 5, message:"min value is 5"}
						})}/>
					<p className="error">{errors?.name?.message}</p>

			<input className="text-light" placeholder="Email" type="email"
				{...register("email", { required: "Email is required",
				 pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					message: "invalid email address"
				  },
				   minLength: {value: 5,message: "min value is 5"}})}/>
               
			      <p className="error">{errors?.email?.message}</p>
				 
					<input className="text-light" placeholder="Password"
				       type="password"{...register("password", {required: "Password is required", minLength: {value:6,message: "minimum is 6"}, maxLength:{value:18, message:"Max password is 18"}})}/>
                     <p className="error">{errors?.password?.message}</p>

				<input className="text-light" type="submit" />
                <p className="text-light">already registered? click <Link to="/Login">here</Link> login</p>
				</form>
			</div>
		</>
	);
};

export default Register;
