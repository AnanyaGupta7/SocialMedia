import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import "./about.css";
import myVideo from "./projectVideo.mp4";

function About() {
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
      <div className="content-container">
        <h2 style={{ color: 'white' }}>The below video shows the explanation and working of the website</h2>
        <div className="video-container">
          <video width="640" height="360" controls>
            <source src={myVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default About;
