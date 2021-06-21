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
  const[password,setPassword] = useState("");
  const[repassword,setRepassword] = useState("");

  const [nameValid,setNameValid] = useState(true);
  const [outletValid,setOutletValid] = useState(true);
  const [mobileValid,setMobileValid] = useState(true);
  const [emailValid,setEmailValid] = useState(true);
  const [passwordValid,setPasswordValid] = useState(true);
  const [repasswordValid,setRepasswordValid] = useState(true);

  const nameRegex = /^[A-Za-z\s]{3,}$/;
    const outletRegex = /[A-Za-z0-9\s]{3,50}/;
    const mobileRegex = /^[6-9][0-9]{9}$/;
    const emailRegex = /^[\w]{3,50}@[A-Za-z]{2,}\.[a-z]{2,}$/;
    const passwordRegex =
      /(?=.{3,12})(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]*[@$_][A-Za-z0-9]*/;



  const checkEmailExists =async (e) =>{
    if(emailRegex.test(e.target.value)){
      const response = await fetch("http://localhost:3100/api/register/checkEmailExists",{
        headers:{"Content-type": "application/json"},
        method: "POST",
        body: JSON.stringify({email:e.target.value})
      });

      const resJson = await response.json();
      if(resJson.present){
        alert("Email Id already exists");
      }
    }
    
  }

  // eslint-disable-next-line no-unused-vars
  const submitFormHandler = async  () => {
    

    let namefieldValid = false;
    let outletfieldValid = false;
    let emailfieldValid = false;
    let passwordfieldValid = false;
    let repasswordfieldValid = false;
    let mobilefieldValid = false;

    if (nameRegex.test(name)) {
        namefieldValid = true;
    }else{
        setNameValid(false);
    }
    if (outletRegex.test(outlet)) {
      outletfieldValid = true;
    }else{
        setOutletValid(false)
    }
    if (emailRegex.test(email)) {
      emailfieldValid = true;
    }else{
        setEmailValid(false);
    }
    if (mobileRegex.test(mobile)) {
      mobilefieldValid = true;
    }else{
        setMobileValid(false);
    }
    if (passwordRegex.test(password)) {
      passwordfieldValid = true;
      if (password === repassword) {
        repasswordfieldValid = true;
      }else{
        setRepasswordValid(false);
      }
    }else{
        setPasswordValid(false)
        setRepasswordValid(false);
    }
    if(namefieldValid && outletfieldValid && emailfieldValid && mobilefieldValid && passwordfieldValid && repasswordfieldValid){
        const user = {name,outlet,email,mobile,password}
        const response = await fetch("http://localhost:3100/api/register",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(user)
        })
        console.log(`Response is ${response} and type is ${typeof response}`);
        if(response.status === 200){
            alert("Registration successful.")
            context.setRegisterButtonClicked(false);
        }

  };
}
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
              type="text" value={name}
              className={nameValid ? "" : "invalid-input"}
              onChange={(e) =>{
                setName(e.target.value);
                setNameValid(true);
            }
              }
            /><span className={nameValid?"name-span":"name-span invalid"}>Enter a valid name</span>
            <label>Outlet Name</label>
            <input
              type="text" value={outlet}
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
              type="text" value={mobile}
              className={mobileValid?"":"invalid-input"}
              onChange={(e) =>{
                setMobile(e.target.value)
                setMobileValid(true)
            }
              }
            /><span className={mobileValid?"mobile-span":"mobile-span invalid"}>Enter a valid mobile number</span>
            <label>Email</label>
            <input
              type="text"  value={email}
              className={emailValid?"" : "invalid-input"}
              onBlur={checkEmailExists}
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailValid(true)
            }
              }
            /><span className={emailValid?"email-span":"email-span invalid"}>Enter a valid email address</span>
          </div>
          <div className="div4">
            <label>Password</label>
            <input
              type="password"  value={password}
              className={passwordValid?"":"invalid-input"}
              onChange={(e) =>{
                setPassword(e.target.value)
                setPasswordValid(true)
                
            }
              }
            /><span className={passwordValid?"password-span":"password-span invalid"}>Password must contain 
            atleast 1 lowercase, 1 number and 1 special character from [@$_]</span>
            <label>Re-Password</label>
            <input
              type="password" value={repassword}
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
}

export default RegisterForm;
