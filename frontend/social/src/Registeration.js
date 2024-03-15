import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './postID.css';
import "./navbar.css";
import axios from 'axios';
import './Register.css';
function Register() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
    const navigate=useNavigate();
  const handleNameChange = (e) => {
    setUserName(e.target.value);
    console.log(e);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response=await axios.post("http://localhost:3000/register",{
        username:username,
        password:password
      })
      if(response.status===201){
        navigate("/login");
      }
    } catch (error) {
      console.error("Network error:", error); 
    }
  };

  return (
    <>
      <div className="container">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={username} onChange={handleNameChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
}

export default Register;














// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Registeration() {
//     const navigate=useNavigate()
//     const [username,setUsername]=useState('')
//   const [password,setPassword]=useState('')
  
//   const handleUsername=(event)=>{
//     setUsername(event.target.value)
//     console.log(event)
//   }
//   const handlePassword=(event)=>{
//     setPassword(event.target.value)
//   }

//   const handleFormData= async(event)=>{
//     try{
//     event.preventDefault()
//     // console.log(username,password)
//    const response=await axios.post("http://localhost:3000/register",{
//     username:username,
//     password:password
//    })
   
//    //console.log(response);
//    if(response.status===201){
//     navigate("/login")
//    }
//   }

// catch(error){
// }
// }
//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleFormData}>
//         <label>Username</label>
//         <input type='text' value={username} onChange={handleUsername}></input><br></br>
//         <label>Password: </label>
//         <input type='password' value={password} onChange={handlePassword}></input><br></br>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Registeration
