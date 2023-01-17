import React,{useState,useEffect} from "react";
import axios from "axios";
const Login = ({history}) => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   
    const handleSubmit = async(e) => {
      e.preventDefault();
      const formData = new FormData();
      
      formData.append('email',email)
      formData.append('password',password);
      const config={
        headers:{
            'Content-Type':'application/json'
        }
      }
       const {data} = await axios.post("http://localhost:3001/users/validate",formData,config);
       console.log("data",data);

       if(data.success){
        alert("user login successfully");
        window.localStorage.setItem("token", data.token);
        history.push("/home")
       }else{
        alert(data.error)
       }
    }
   return (<>
   <h1>Login here</h1>
   <div class="container">
    <form className="signupForm" onSubmit={handleSubmit}>
        
       <div>
       <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="Enter Email"/>
       </div>
        <div>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Enter Password"/>
        </div>
       
        <button type="submit">Login</button>
    </form>
   </div>
   </>)
}
export default Login;