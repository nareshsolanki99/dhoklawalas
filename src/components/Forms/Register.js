import React, { useContext } from "react"
import Modal from "../Modal/Modal"
import "../../styles/main.scss"
import ButtonContext from "../../context/ButtonContext"
const RegisterForm = props =>{
    const context = useContext(ButtonContext);
    return <Modal>
        <div className="register-form">
            <div className="x-box" onClick={()=> context.setRegisterButtonClicked(false)}>X</div>
            <div className="heading-div"><h3>Register</h3></div>
            <div className="form-div">
                <div className="div1"><label>Name</label><input type="text" />
                <label>Outlet Name</label><input type="text" /></div>
                <div className="div2"><label>Mobile</label><input type="text" />
                <label>Email</label><input type="text" /></div>
                <div className="div3"><label>Username</label><input type="text"/></div>
                <div className="div4"><label>Password</label><input type="password"/>
                <label>Re-Password</label><input type="password"/></div>
                <button>Register</button>
            <div className="end-div">Already Registerd? Login!</div>
            </div>
        </div>
    </Modal>
}

export default RegisterForm