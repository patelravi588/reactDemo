import React from "react";
import { NavLink, Link } from "react-router-dom";
 const NavbarMenu = () =>{
     return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">React User</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/aboutus">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="contactus">Contact Us</NavLink>
                    </li>
                    </ul>
                </div>
                <Link className ="btn btn-outline-light"  to="/users/add">Add User</Link>
            </div>
        </nav>
     )
 }

 export default NavbarMenu