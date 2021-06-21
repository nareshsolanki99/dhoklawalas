import React, { useContext } from "react"
import "../../styles/main.scss"
import ButtonContext from "../../context/ButtonContext"
import CartContext from "../../context/CartContext";
import UserContext from "../../context/user-context"
import { useHistory } from 'react-router-dom';
import ProductContext from "../../context/product-context"
const Header = (props) =>{
    const context = useContext(ButtonContext);
    const {items} = useContext(CartContext);
    const {outlet} = useContext(UserContext);
    const history = useHistory();
    const productctx = useContext(ProductContext);


    const updateProductList = (e) =>{
      productctx.updatedList(e.target.value);
    }

    return (
      <div className="header-div">
        <div className="logo-container">
          <h2>PP</h2>
          <h3> Dhoklawala's</h3>
        </div>
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="product-search"
          value = {productctx.search}
          placeholder=" Search for products here..."
          onFocus={()=> history.push('/products')}
          onChange={updateProductList}
        />
        <div className="action-container">
          <ul>
            {!outlet && <li onClick={() => context.setRegisterButtonClicked(true)}>
              <i className="fas fa-user-plus register-icon"></i> Register
            </li>}
            {!outlet && <li onClick={() => context.setLoginButtonClicked(true)}>
              <i className="fas fa-unlock-alt login-icon"></i> Login
            </li>}
            </ul>
            {outlet && <h5>{`Welcome ${outlet.slice(0,30)}`}</h5>}
          <div>{outlet && <label><i className="fas fa-user account"></i>My Account</label>}
          <label onClick={() => context.setCartButtonClicked(true)}>
            <i className="fas fa-shopping-cart cart-icon"></i>Cart(
            <span>{items.length}</span>)
          </label></div>
        </div>
      </div>
    );
}

export default Header