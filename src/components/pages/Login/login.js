import React, { useState }from "react";
import NavBar from '../../molecules/NavBar';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = () => {
        console.log("Button pressed");
        const data = {
            username: username,
            password: password,
        };
        console.log(data);
    }
  return (
   <div className="container">
      <NavBar/>
     <h3>Login</h3>
     <p className="mt-2">Username</p>
     <input placeholder="Masukan nama" value={username} onChange={(e) => setUsername(e.target.value)}/>
     <p className="mt-2">Password</p>
     <input placeholder="Masukkan password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
     <br></br>
     <br></br>
     <button type="button" onClick={handlesubmit} class="btn btn-danger btn-sm">Submit</button>
   </div>
   );
};

export default Login;