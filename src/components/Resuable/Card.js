import React, { useContext, useState } from "react"
import "../../styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap"
import CartContext from "../../context/CartContext";

function Card(props){

    const cartContext = useContext(CartContext);

    const [qty,setQty] = useState(1);
    const addToCart = () =>{

        const item = {
            id:props.id,
            name:props.name,
            price:props.price,
            qty:Number(qty)
        }
        
        setQty(1);
        cartContext.addItem(item);
    }

    const qtyInputHandler = (e) =>{
        setQty(e.target.value);
    }

    return (
      <div className={props.className ? props.className : "product-div"}>
        <div className="image-div">
          <img id="img-container" src={props.imgSrc} alt={props.name} />
        </div>
        <div className="name-container">
          <h4 className="product">{props.name}</h4>
        </div>
        <h3>Price:{props.price}</h3>
        <div className="actions">
          <input
            className="qty-input"
            value={qty}
            type="number"
            min="1"
            max="20"
            onChange={qtyInputHandler}
          />
          <Button className="button" onClick={addToCart}>
            Add To Cart
          </Button>
        </div>
      </div>
    );

}

export default Card