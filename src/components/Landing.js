
import React from "react";
const Landing = ({history}) => {
   return (<>
   <div className="btnContainer" style={{marginLeft:"1200px"}}>
    <div><button onClick={()=>history.push("/login")} className="loginBtn">Login</button></div>
    <div><button onClick={()=>history.push("/signup")} className="signupBtn">Signup</button></div>

</div>

   <h1>Daily Tasks Management System</h1>
   {/* <p>This is simple Library Management System which use for maintain the record of the library.
    This library management systam has made by using ReactJS,NoSql database,NodeJs and bootstrap.
    This is MERN Project on online library management sysytem.
</p> */}

<div style={{backgroundImage: 
 "url('https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/5/main/1SvzKctRCi8bwB0QPdOZkBP0pRhsOqZpl0wjs6y0.png')",
        height:'100vh',
        marginTop:'-120px',
       backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
  
</div>
   </>)
}
export default Landing;