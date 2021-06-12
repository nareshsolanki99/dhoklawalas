import React from "react"
import "../../styles/main.scss"

const Header = (props) =>{
    return <div className="header-div">
        <div className="logo-container"><h2>PP</h2><h3> Dhoklawala's</h3></div>
        <i className="fas fa-search search-icon"></i><input type="text" className="product-search" placeholder=" Search for products here..."/>
        <div className="action-container"><ul><li><a href="#"><i className="fas fa-user-plus register-icon"></i>  Register</a></li>
        <li><a href="#"><i className="fas fa-unlock-alt login-icon"></i>  Login</a></li></ul>
        <a href="#" className="cart"><i className="fas fa-shopping-cart"></i>Cart(<span>0</span>)</a>
        </div>
        
    </div>
}

export default Header