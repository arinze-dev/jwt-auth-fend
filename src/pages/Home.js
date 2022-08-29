// import { Navbar } from "react-bootstrap";
import {React , useEffect, useState} from "react";
import "../App.css";
import {  getUserInfo} from "../auth/index";

 
const Home = function () {
  const token = getUserInfo().token
	 const [Data,setData] = useState()
  
useEffect(()=>{
	fetch("http://localhost:4040/api/home/",{method:'GET',
	headers: {'Content-Type':'application/json','usertoken': token}})
	.then(res => res.json()).then(data=> {setData(data)})
   },[])
   console.log(Data);
	return (
		<>
		{/* <p>{Data?.message}</p> */}
			<div className="pagestyle"> welcome to home page</div>
		</>
	);
};

export default Home;
