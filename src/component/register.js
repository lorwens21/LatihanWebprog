import React, { useState } from 'react';

const Register = () => {

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddres] = useState("");

    const handlesubmit = () => {
        console.log("Button pressed");
        const data = {
            fullname: fullname,
            username: username,
            email: email,
            phone: phone,
            address: address,
        };
        console.log(data);
    }

    return (
    <div class="container ms-10 mt-5 p-5" >
      <h3>Register</h3>
      <p>Fullname</p>
      <input placeholder="Masukan Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
      <p>Username</p>
      <input placeholder="Masukkan Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <p>Email</p>
      <input placeholder="Masukan email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <p>Phone</p>
      <input placeholder="Masukan nomor"type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <p>Address</p>
      <input placeholder="Masukan alamat" value={address} onChange={(e) => setAddres(e.target.value)}/>
      <br></br>
      <br></br>
      <button type="button" onClick = {handlesubmit} className="btn btn-danger" class="btn btn-outline-danger">Submit</button>
    </div>
    );
}

export default Register;