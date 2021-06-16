import React, { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import "../../styles/main.scss";
import ButtonContext from "../../context/ButtonContext";

const RegisterForm = (props) => {
  const context = useContext(ButtonContext);

  const[name,setName] = useState("");
  const[outlet,setOutlet] = useState("");
  const[email,setEmail] = useState("");
  const[mobile,setMobile] = useState("");
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const[repassword,setRepassword] = useState("");

  const [nameValid,setNameValid] = useState(true);
  const [outletValid,setOutletValid] = useState(true);
  const [mobileValid,setMobileValid] = useState(true);
  const [emailValid,setEmailValid] = useState(true);
  const [usernameValid,setUsernameValid] = useState(true);
  const [passwordValid,setPasswordValid] = useState(true);
  const [repasswordValid,setRepasswordValid] = useState(true);



  const submitFormHandler = () => {
    const nameRegex = /^[A-Za-z]{3,}$/;
    const outletRegex = /[A-Za-z0-9\s]{3,50}/;
    const mobileRegex = /^[6-9][0-9]{9}$/;
    const emailRegex = /^[\w]{3,50}@[A-Za-z]{2,}\.[a-z]{2,}$/;
    const userNameRegex = /^[A-za-z]{5,}[0-9]{0,2}$/;
    const passwordRegex =
      /(?=.{3,12})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]*[@$_][A-Za-z0-9]*/;

   

    


    if (nameRegex.test(name)) {
        setNameValid(true)
    }else{
        setNameValid(false);
    }
    if (outletRegex.test(outlet)) {
      setOutletValid(true)
    }else{
        setOutletValid(false)
    }
    if (emailRegex.test(email)) {
      setEmailValid(true);
    }else{
        setEmailValid(false);
    }
    if (userNameRegex.test(username) && username){
        setUsernameValid(true);
    }else{
        setUsernameValid(false);
    }
    if (mobileRegex.test(mobile)) {
      setMobileValid(true);
    }else{
        setMobileValid(false);
    }
    if (passwordRegex.test(password)) {
      setPasswordValid(true);
      if (password === repassword) {
        setRepasswordValid(true);
      }else{
        setRepasswordValid(false);
      }
    }else{
        setPasswordValid(false)
        setRepasswordValid(false);
    }

    if(nameValid && outletValid && emailValid && mobileValid && passwordValid && repasswordValid && usernameValid){
        const user = {name,outlet,email,mobile,password,username}
        fetch("http://localhost:3100/api/register",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(user)
        }).then(res => console.log(res.status))
    }

  };
  return (
    <Modal>
      <div className="register-form">
        <div
          className="x-box"
          onClick={() => context.setRegisterButtonClicked(false)}
        >
          X
        </div>
        <div className="heading-div">
          <h3>Register</h3>
        </div>
        <div className="form-div">
          <div className="div1">
            <label>Name</label>
            <input
              type="text" 
              className={nameValid ? "" : "invalid-input"}
              onChange={(e) =>{
                setName(e.target.value);
                setNameValid(true);
            }
              }
            /><span className={nameValid?"name-span":"name-span invalid"}>Enter a valid name</span>
            <label>Outlet Name</label>
            <input
              type="text"
              className={outletValid?"": "invalid-input"}
              onChange={(e) =>{
                setOutlet(e.target.value)
                setOutletValid(true);
            }

              }
            /><span className={outletValid?"outlet-span":"outlet-span invalid"}>Enter a valid outlet name</span>
          </div>
          <div className="div2">
            <label>Mobile</label>
            <input
              type="text"
              className={mobileValid?"":"invalid-input"}
              onChange={(e) =>{
                setMobile(e.target.value)
                setMobileValid(true)
            }
              }
            /><span className={mobileValid?"mobile-span":"mobile-span invalid"}>Enter a valid mobile number</span>
            <label>Email</label>
            <input
              type="text"
              className={emailValid?"" : "invalid-input"}
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailValid(true)
            }
              }
            /><span className={emailValid?"email-span":"email-span invalid"}>Enter a valid email address</span>
          </div>
          <div className="div3">
            <label>Username</label>
            <input
              type="text"
              className={usernameValid?"" : "invalid-input"}
              onChange={(e) =>  {
               setUsername(e.target.value)
                setUsernameValid(true)
            }
              }
            /><span className={usernameValid?"username-span":"username-span invalid"}>Enter a valid username name</span>
          </div>
          <div className="div4">
            <label>Password</label>
            <input
              type="password"
              className={passwordValid?"":"invalid-input"}
              onChange={(e) =>{
                setPassword(e.target.value)
                setPasswordValid(true)
                
            }
              }
            /><span className={passwordValid?"password-span":"password-span invalid"}>Password must contain 1 uppercase,
            1 lowercase and 1 special character and 1 number</span>
            <label>Re-Password</label>
            <input
              type="password"
              className={repasswordValid?"":"invalid-input"}
              onChange={(e) => {
                setRepassword(e.target.value)
                setRepasswordValid(true)
              }
            }
            /><span className={repasswordValid?"repassword-span":"repassword-span invalid"}>Password do not match</span>
          </div>
          <button onClick={submitFormHandler}>Register</button>
          <div
            className="end-div"
            onClick={() => {
              context.setLoginButtonClicked(true);
                context.setRegisterButtonClicked(false)
            }}
          >
            Already Registerd? Login!
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterForm;
