import React, { useContext } from "react"
import Modal from "../Modal/Modal"
import "../../styles/main.scss"
import ButtonContext from "../../context/ButtonContext"
const LoginForm = props =>{
    const context = useContext(ButtonContext);
    return <Modal>
        <div className="login-form">
            <div className="x-box" onClick={()=> context.setLoginButtonClicked(false)}>X</div>
            <div className="heading-div"><h3>Login</h3></div>
            <div className="form-div">
                <label>Username</label><input type="text"/>
                <label>Password</label><input type="text"/>
                <button>Login</button>
            <div className="end-div">Don't have an account? Register!</div>
            </div>
        </div>
    </Modal>
}

export default LoginForm