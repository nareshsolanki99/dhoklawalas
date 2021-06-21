import React, { useContext } from "react";
import "../../styles/main.scss";
import Modal from "../Modal/Modal";
import ButtonContext from "../../context/ButtonContext";
import CartContext from "../../context/CartContext";

const Cart = (props) => {
  const context = useContext(ButtonContext);
  const { items, totalAmount, addItem, removeItem, delItem } =
    useContext(CartContext);

  const addItemToCart = (item) => {
    addItem({ ...item, qty: 1 });
  };

  const removeItemFromCart = (id) => {
    removeItem(id);
  };

  const deleteItemFromCart = (id, amount) => {
    delItem(id, amount);
  };

  const cartItems = items.map((item, index) => {
    return (
      <li key={item.id}>
        <span>{item.name}</span>
        <span>
          Qty: {item.qty}{" "}
          <button onClick={addItemToCart.bind(null, item)}>+</button>{" "}
          <button onClick={removeItemFromCart.bind(null, item.id)} >-</button>
        </span>
        <span>Price: Rs.{item.price}/-Kg</span>
        <span>Total: Rs.{item.qty * item.price}</span>
        <i
          className="fas fa-trash-alt"
          onClick={deleteItemFromCart.bind(
            null,
            item.id,
            item.qty * item.price
          )}
        ></i>
      </li>
    );
  });

  return (
    <Modal>
      <div className="cart-container">
        <span
          className="x-box"
          onClick={() => context.setCartButtonClicked(false)}
        >
          X
        </span>
        <ul className="cart-items-div">{cartItems}</ul>
        <div className="button-container">
          <button onClick={() => context.setCartButtonClicked(false)}>
            Close
          </button>
         {items.length>0 && <button> Order</button>}
          <span>Total Amount: Rs.{totalAmount}</span>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
