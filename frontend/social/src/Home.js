import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./navbar.css";
function Home() {
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
      <section id="personal-area">
        <div class="personal-single">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="personal-text">
              <div class="my-info">
                <h1>WELCOME to Sociopedia</h1>
                <h2 class="cd-headline clip is-full-width">
                  An interavtive website for you to see all your posts and content.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="f">
          <p>Author: Ananya Gupta</p>
        </div>
        <div class="fa">
          <p>email: anagupta1512@gmail.com</p>
        </div>
      </footer>
    </>
  );
}

export default Home;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Counter from "./counter";
// function Home() {
//   const [displayCounter, setDisplayCounter] = useState(false);
//   if (displayCounter) {
//     return <Counter></Counter>;
//   } else {
//     return (
//       <div>
//         <h1>Home</h1>
//         <Link to="/About">About</Link>
//         <br></br>
//         <Link to="/Contact">Contact</Link>
//       </div>
//     );
//   }
// }

// export default Home;




