import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home/Home";
import "./styles/app.css"
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div className="App">
      <Profile/>
       {/* <Login/> */}
       {/*<div style={{height:"100vh",display:'flex',alignItems:'center'}}>*/}
        {/*<Register/>*/}
       {/*</div>*/}
       {/* <Home/> */}
       
    </div>
  );
}

export default App;
