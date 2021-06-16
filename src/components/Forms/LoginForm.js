import React, { useContext, useState } from "react"
import Modal from "../Modal/Modal"
import "../../styles/main.scss"
import ButtonContext from "../../context/ButtonContext"
const LoginForm = props =>{
    const context = useContext(ButtonContext);

    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [usernameIsEmpty,setNameEmpty] = useState(false);
    const [passwordIsEmpty,setPasswordEmpty] = useState(false);

    const formSubmitHandler = () => {
        if(!username && !password){
            setNameEmpty(true);
            setPasswordEmpty(true);
            return
        
        }
        
        
        if(!username || !password){
            if(!username){
                setNameEmpty(true);
            } 
            else {
                setPasswordEmpty(true);
            }
            return
        }
    }



    return <Modal>
        <div className="login-form">
            <div className="x-box" onClick={()=> context.setLoginButtonClicked(false)}>X</div>
            <div className="heading-div"><h3>Login</h3></div>
            <div className="form-div">
                <label onChange={(e)=> setUserName(e.target.value)}>Username</label><input type="text" className={usernameIsEmpty?"empty":""}/>
                <label onChange={(e)=> setPassword(e.target.value)}>Password</label><input type="text" className={passwordIsEmpty?"empty":""}/>
                <button onClick={formSubmitHandler}>Login</button>
            <div className="end-div" onClick={()=> {context.setLoginButtonClicked(false)
                           context.setRegisterButtonClicked(true) }}>Don't have an account? Register!</div>
            </div>
        </div>
    </Modal>
}

export default LoginForm