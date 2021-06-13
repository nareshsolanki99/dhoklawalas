import React, { useContext } from "react"
import "../../styles/main.scss"
import ButtonContext from "../../context/ButtonContext"
const Header = (props) =>{
    const context = useContext(ButtonContext);
    return <div className="header-div">
        <div className="logo-container"><h2>PP</h2><h3> Dhoklawala's</h3></div>
        <i className="fas fa-search search-icon"></i><input type="text" className="product-search" placeholder=" Search for products here..."/>
        <div className="action-container"><ul><li onClick={()=> context.setRegisterButtonClicked(true) }><i className="fas fa-user-plus register-icon"></i>  Register</li>
        <li onClick={()=> context.setLoginButtonClicked(true) }><i className="fas fa-unlock-alt login-icon"></i>  Login</li></ul>
        <label ><i className="fas fa-shopping-cart cart-icon"></i>Cart(<span>0</span>)</label></div>
        
    </div>
}

export default Header