import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img src="./images/good/jpeg" alt="rubix Cube"></img>
      <h3 className="navbar-items-left">Home</h3>
      <div className ="navbar-items-right" >
        <h3>Sign Up</h3>
        <h3>Contacts</h3>
        <h3>Log In</h3>
      </div>
    </nav>
  );
}
