import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Edit = ({history}) =>{
    var [name,setName] = useState("");
    var [description,setDescription] = useState("");
    const { Id } = useParams();
    console.log("id",Id);
    var token  = window.localStorage.getItem("token");
    const config={
        headers:{
            'Content-Type':'application/json',
            'auth-token':token
        }
      }

    useEffect(()=>{
        async function getData(){
            const {data} = await axios.get(`http://localhost:3001/tasks/get/${Id}`,config);
            console.log("data",data);  
            setName(data.task.taskName);
            setDescription(data.task.taskDescription);
        }   
        getData();

    },[])
    const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name);
    formData.append('description',description);
    var token  = window.localStorage.getItem("token");
  
    const config={
        headers:{
            'Content-Type':'application/json',
            'auth-token':token
        }
      }
       const {data} = await axios.put(`http://localhost:3001/tasks/edit/${Id}`,formData,config);
       console.log("data",data);
       if(data.success){
        alert("task edited successfully");
        history.push("/home")
       }
}
  return (<>
  <div class="taskContainer">
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter task name"/>
        </div>
        <div>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="enter task description"/>
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
  </div>
  </>)
}
export default Edit;