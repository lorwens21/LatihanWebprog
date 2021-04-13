import React, { useState }from "react";

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
   <div class="container mt-5 p-5">
     <h3>Login</h3>
     <p>Username</p>
     <input placeholder="Masukan nama" value={username} onChange={(e) => setUsername(e.target.value)}/>
     <p>Password</p>
     <input placeholder="Masukkan password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
     <br></br>
     <br></br>
     <button type="button" onClick={handlesubmit} className="btn btn-primary" class="btn btn-outline-primary">Submit</button>
   </div>
   );
};

export default Login;