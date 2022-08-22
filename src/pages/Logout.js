// import { useNavigate } from "react-router-dom";

// 
const Logout = async function () {

// 	 fetch("http://localhost:4040/api/logout", { method: "GET" })
// 		.then((res) => {
// 			res.json();
// 		}).then(data=>{
// 			sessionStorage.removeItem("userInfo");	
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		})
// };

// const navigate = useNavigate()

try {
	const res = await fetch("http://localhost:4040/api/logout", { method: "GET" })
	const data = await res.json()
	console.log(data);
	sessionStorage.removeItem("userInfo");	
//   return navigate("/login")
   
  return window.location.href = "/login"

} catch (error) {
	 console.log(error);
} 

}

export default Logout;
