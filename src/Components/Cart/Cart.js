import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
import { Container, CloseButton } from "react-bootstrap";
import CartItem from "./CartItem";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Container className={classes.cart}>
      <CloseButton onClick={props.onClose} />
      <div className={classes["cart-main"]}>
        <div className={classes["cart-item"]}>ITEM</div>
        <div className={classes["cart-price"]}>PRICE</div>
        <div className={classes["cart-quantity"]}>QUANTITY</div>
      </div>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} prod={item} />
      ))}

      <div
        style={{ fontWeight: "bold" }}
      >{`Total : ${cartCtx.totalAmount}`}</div>
    </Container>
  );
};

export default Cart;
