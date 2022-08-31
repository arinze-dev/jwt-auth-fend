export const getUserInfo = ()=>{
    let userInfo = null
         if (sessionStorage.getItem("userInfo")) {
            return userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
         }
         return userInfo      
}