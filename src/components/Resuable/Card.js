import React from "react"
import "../../styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap"

function Card(props){

    console.log(props.imgSrc);
    return(
        <div className="product-div">
            <div className="image-div">
            <img id="img-container" src={props.imgSrc} alt={props.name}/></div>
            <div className="name-container"><h4 className="product">{props.name}</h4></div>
            <h3>Price:{props.price}</h3>
            <div className="actions"><input className="qty-input" type="number" min="1" max="20" defaultValue="1"/><Button>Add To Cart</Button></div>
        </div>
    )

}

export default Card