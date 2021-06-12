import React from "react"
import {Link } from "react-router-dom"

const NavBar = () =>{
    return <div className="nav-div">
        <ul><li><Link to="/">Home</Link></li>
        <li><Link to="">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="">Contact Us</Link></li>
        </ul>
    </div>
}

export default NavBar