import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import "../../styles/main.scss"
const Backdrop = () => {
    return <div className="backdrop-container"></div>
}

const Modaloverlay = props =>{
    return <div className="modal-div">{props.children}</div>
}

const Modal = props =>{
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />,document.getElementById('overlays'))}
        {ReactDOM.createPortal(<Modaloverlay >{props.children}</Modaloverlay>,document.getElementById('overlays'))}
    </Fragment>

}
export default Modal
