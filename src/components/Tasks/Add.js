import React, { useState } from "react";
import axios from "axios";
const Add = ({history}) =>{
    var [task,setTask] = useState("");
    var [description,setDescription] = useState("");
    const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('task',task);
    formData.append('description',description);
    var token  = window.localStorage.getItem("token");
  
    const config={
        headers:{
            'Content-Type':'application/json',
            'auth-token':token
        }
      }
       const {data} = await axios.post("http://localhost:3001/tasks/add",formData,config);
       console.log("data",data);
       if(data.success){
        alert("task added successfully");
        history.push("/home")
       }
}
  return (<>
  <div class="taskContainer">
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="enter task name"/>
        </div>
        <div>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="enter task description"/>
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
  </div>
  </>)
}
export default Add;