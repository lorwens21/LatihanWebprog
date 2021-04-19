import React, { useState }from "react";
import NavBar from '../../molecules/NavBar';
import Axios from 'axios';

const Inputdata = () => {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");

    const addUser = () => {
        console.log("Button pressed");
        const data= {
            firstName: firstName,
            lastName: lastName,
            email: email,
        };
        Axios.post('http://localhost:3004/users', data)
    }

  return (
   <div className="container">
      <NavBar/>
     <h3>Input Data</h3>
     <p className="mt-2 pt-1">First Name</p>
     <input placeholder="Masukan nama" value={firstName} onChange={(e) => setFirstname(e.target.value)}/>
     <p className="mt-2">Last Name</p>
     <input placeholder="Masukan nama" value={lastName} onChange={(e) => setLastname(e.target.value)}/>
     <p className="mt-2">Email</p>
     <input placeholder="Masukan email" value={email} onChange={(e) => setEmail(e.target.value)}/>
     <br></br>
     <br></br>
     <button type="button" onClick={addUser} class="btn btn-primary btn-sm" >Save</button>
   </div>
   );
};

export default Inputdata;