import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Login.css'
function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate=useNavigate()
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response=await axios.post("http://localhost:3000/login",{
        username:username,
        password:password
      })
      if(response.status===200){
        localStorage.setItem("jwtToken",response.data.token);
        navigate("/posts");
      }
    } catch (error) {
      setLoginError("invalid username or password");
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

    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={username} onChange={handleNameChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Login</button>
      </form>
      {loginError && <p className="login-error">{loginError}</p>}
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
    </>
  );
}

export default Login;