import {BrowserRouter,Route} from "react-router-dom"
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import "./App.css"
import Landing from "./components/Landing"
import Home from "./components/Home";
import Add from "./components/Tasks/Add";
import Edit from "./components/Tasks/Edit"
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Route path='/' exact component={Landing} />
       <Route path='/login' exact component={Login} />
       <Route path='/home' exact component={Home} />
       <Route path='/signup' exact component={Register} />
       <Route path='/addTask' exact component={Add} />
       <Route path='/editTask/:Id' exact component={Edit} />
       </BrowserRouter>
        
    </div>
  );
}

export default App;
