import React,{useState,useEffect} from "react";
import axios from "axios";
const Register = ({history}) => {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   
    const handleSubmit = async(e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('fname',fname)
      formData.append('lname',lname)
      formData.append('email',email)
      formData.append('password',password);
      const config={
        headers:{
            'Content-Type':'application/json'
        }
      }
       const {data} = await axios.post("http://localhost:3001/users/register",formData,config);
       console.log("data",data);
       if(data.success){
        window.localStorage.setItem("token", data.token);
        alert("user regitered successfully");
        history.push("/home")
       }else{
        alert(data.error)
       }
    }
   return (<>
   <h1>Sigup here</h1>
   <div class="container">
    <form className="signupForm" onSubmit={handleSubmit}>
        <div>
        <input onChange={(e)=>setFname(e.target.value)} type="text" name="fname" placeholder="Enter FirstName"/>
        </div>
       <div>
       <input onChange={(e)=>setLname(e.target.value)} type="text" name="lname" placeholder="Enter LastName"/>
       </div>
       <div>
       <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="Enter Email"/>
       </div>
        <div>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Enter Password"/>
        </div>
       
        <button type="submit">Register</button>
    </form>
   </div>
   </>)
}
export default Register;