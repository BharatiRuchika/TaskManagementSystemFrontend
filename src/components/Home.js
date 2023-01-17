import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({history}) => {
    var [task, setTask] = useState("");
    var [todos, setTodos] = useState([]);
   useEffect(()=>{
    async function getTasks () {
        var token  = window.localStorage.getItem("token");
    const config={
        headers:{
            'Content-Type':'application/json',
            'auth-token':token
        }
      }
        const {data} = await axios.get("http://localhost:3001/tasks/get",config);
        console.log("tasks",data.tasks);
        setTodos(data.tasks)
    }
    getTasks();
   },[])
    var addTask = () => {
        history.push('/addTask')
    }
    var editTask = (id)=>{
        history.push(`/editTask/${id}`)
    }
    var logout = () => { 
        localStorage.removeItem("token");
        history.push("/login");
    }
    var removeTask = async(id)=>{
        var token  = window.localStorage.getItem("token");
        const config={
            headers:{
                'Content-Type':'application/json',
                'auth-token':token
            }
          }
            const {data} = await axios.delete(`http://localhost:3001/tasks/delete/${id}`,config);
            console.log("data",data);
            var newTodos = todos.filter((todo)=>{
                return todo._id!=id
            })
            setTodos(newTodos);
    }
    return (<>
<button onClick={logout}>Logout</button>
        {todos && todos.length == 0 ? <h1>please add the tasks </h1>:""}
        
            <button onClick={addTask}>Add Tasks</button>
            {todos && todos.length != 0 ?<table>
                <th>Task Name</th>
                <th>Task Description</th>
                <th>Action</th>
                {todos.map((todo)=>{
                 return (<>
                 <tr>
                    <td>
                        {todo.taskName}
                    </td>
                    <td>
                    {todo.taskDescription}
                    </td>
                    <td>
                   <button onClick={()=>removeTask(todo._id)}>Remove</button>
                   <button onClick={()=>editTask(todo._id)}>Edit</button>
                    </td>
                </tr>
                 </>)
            })}
                
            </table>:""}
            
           
            
            </>
    )
}
export default Home;
