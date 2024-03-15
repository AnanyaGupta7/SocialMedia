
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './postID.css';
import "./navbar.css";


export default function Posts(){
    const params= useParams()
    console.log(params)
    return(
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
        <div className="post-container">
            <h3 className="post-card">Post id is:- {params.postId}</h3>
                 
        </div>
        </>
    )
}