import React, { useContext, useState } from "react"
import Modal from "../Modal/Modal"
import "../../styles/main.scss"
import ButtonContext from "../../context/ButtonContext"
import UserContext from "../../context/user-context"
const LoginForm = props =>{
    const context = useContext(ButtonContext);
    const userContext = useContext(UserContext);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailValid,setEmailValid] = useState(true);
    const [passwordValid,setPasswordValid] = useState(true);
    
    const emailRegex = /^[\w]{3,50}@[A-Za-z]{2,}\.[a-z]{2,}$/;

    const formSubmitHandler = async () => {
        if(!email && !password){
            setEmailValid(false);
            setPasswordValid(false);
            alert("All fields required")
            return
        }
        
        
        if(!email || !password){
            if(!email){
                setEmailValid(false);
                alert("Email Address required");
            } 
            else {
                setPasswordValid(false);
                alert("Password required");
            }
            return
        }
        if(!emailRegex.test(email)){
            setEmailValid(false);
            alert("Email Id must be valid");
            return;
        }
        setEmailValid(true);
        setPasswordValid(true);
        const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/login",{
            method:"post",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify({
                email,
                password
            })
        })
        if(response.status !== 200){
            alert("Email id or Password do not match");
        }else{
            alert("Login Successful");
            context.setLoginButtonClicked(false);
        }
        const resJson = await response.json();
        const {_id,outlet,token} = resJson
        userContext.setOutlet(outlet);
        userContext.setId(_id);
        userContext.setToken(token);
        localStorage.setItem("user",JSON.stringify({"_id":_id ,"token":token ,outlet:outlet}));
    }



    return (
      <Modal>
        <div className="login-form">
          <div
            className="x-box"
            onClick={() => context.setLoginButtonClicked(false)}
          >
            X
          </div>
          <div className="heading-div">
            <h3>Login</h3>
          </div>
          <div className="form-div">
            <label>Email Id</label>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValid(true);
              }}
              className={emailValid ? "" : "invalid-input"}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordValid(true);
              }}
              className={passwordValid ? "" : "invalid-input"}
            />
            <button onClick={formSubmitHandler}>Login</button>
            <span>Forget Password?</span>
            <div
              className="end-div"
              onClick={() => {
                context.setLoginButtonClicked(false);
                context.setRegisterButtonClicked(true);
              }}
            >
              Don't have an account? Register!
            </div>
          </div>
        </div>
      </Modal>
    );
}

export default LoginForm