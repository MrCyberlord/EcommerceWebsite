import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numOfItems = cartCtx.items.reduce((curVal, item) => {
    return curVal + item.quantity;
  }, 0);
  return (
    <>
      <Button onClick={props.onClick}>Cart {numOfItems}</Button>
    </>
  );
};
export default HeaderButton;
