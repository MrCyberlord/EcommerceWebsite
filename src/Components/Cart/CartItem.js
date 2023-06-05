import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const removeItem = () => {
    const deleteItem = {
      id: props.prod.id,
      quantity: parseInt(props.prod.quantity),
      price: parseInt(props.prod.price),
    };
    cartCtx.removeItem(deleteItem);
  };
  return (
    <div className="cartitem-main">
      <div className="cartitem-img">
        <span>{props.prod.title}</span>
      </div>
      <div className="cartitem-price">{props.prod.price}</div>
      <div className="cartitem-button">
        <span className="cartitem-quantity">{props.prod.quantity}</span>
        <button onClick={removeItem}>Delete</button>
      </div>
    </div>
  );
};
export default CartItem;
