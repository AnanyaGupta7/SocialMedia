import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Posts.css';
import './navbar.css';

function Post() {
  const [posts, setPosts] = useState([]);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts', {
          headers: {
            authorization: "Bearer " + localStorage.getItem("jwtToken")
          }
        });
        setPosts(response.data);
      } catch (error) {
        setApiError(<h1>something went wrong...</h1>);
      }
    };

    if (localStorage.getItem("jwtToken")) {
      fetchData();
    } else {
      setApiError(<h1>Please login first</h1>);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate('/');
  };

  return (
    <>
      <div className="container">
        <div className="nav">
          <Link to="/home">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
      {localStorage.getItem("jwtToken") && (
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      )}
      <div>
        {apiError && <p>{apiError}</p>}
        <div className="post-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Post;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
// import './Posts.css';
// function Post() {
//   const [posts, setPosts] = useState([]);
//   const navigate=useNavigate();
//   useEffect(() => {
//     if(localStorage.getItem("jwtToken")){
//       (async()=>{
//         try{
//           const response=await axios.get('https://jsonplaceholder.typicode.com/posts',{
//           })
//           setPosts(response.data);
//         }
//         catch(error){

//         }
//       })()
//   }
//   }, []);
//   const handleLogout = () => {
//     localStorage.removeItem("jwtToken");
//     navigate('/');
//   };

//   return (
//     <div>
//       <button className="logout-button" onClick={handleLogout}>Logout</button>
//       <div className="post-container">
//         {posts.map((post) => (
//           <div key={post.id} className="post-card">
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Post;









// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// export default function ViewPosts() {
//     const navigate=useNavigate();
//     const [apiData , setApiData] = useState([])
//     const [loading , isLoading] = useState(true)
//     const [apiError , setApiError] = useState(false)
//     useEffect(()=>{
//         if(localStorage.getItem("jwtToken")){
//         (async ()=>{
//             try {
//                 const response = await axios.get('http://localhost:3000/posts',{
//                 headers:{
//                     authorization: "Bearer "+ localStorage.getItem("jwtToken")
//                 }
//             })
//                 setApiData(response.data)
//                 isLoading(false)
//             } catch (error) {
//                 setApiError(true)
//             }
//         })()
//     }
//     else{
//        navigate("/login")
//     }
//     },[])
//     if(apiError){
//         return <h1>Something Went Wrong...</h1>
//     }
//     if(loading){
//         return <h1>Loading.....</h1>
//     }

//     const result = apiData.map((data)=><h1 key={data.id}>{data.title}<p>{data.content}</p></h1>)
//   return (
//     <div>
//         <h1>Posts :-</h1>
//         {result}
//     </div>
//   )
// }
// // //https://jsonplaceholder.typicode.com/posts

// // import React, { useEffect,useState } from 'react'
// // import axios from 'axios'

// // function ViewPosts() {
// //     const[apiData,setApiData]=useState([])
// //     const[loading,isLoading]=useState(true)
// //     const[apiError,setApiError]=useState(false)

// //     useEffect(()=>{

// // (async()=>{
// //     try{
// //     const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
// //     setApiData(response.data)
// //     isLoading(false)
// //     console.log(apiData)
// // }
// // catch(error){
// // setApiError(true)
// // }
// // }
// // )()

// // },[])
// // if(apiError){
// //     return <h1>something went wrong</h1>
// // }
// // if(loading){
// //     return <h1>loading...</h1>
// // }
// // const result=apiData.map((data)=><h1 key={data.id}>{data.title}</h1>)
// //   return (
// //     <div>
// //       <h1>posts:-</h1>
// //       {result}
// //     </div>
// //   )
// // }

// // export default ViewPosts
