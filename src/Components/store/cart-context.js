import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  quantity: 0,
  removeItem: (id) => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default CartContext;
