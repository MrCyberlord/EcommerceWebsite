import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const ShowCartHandler = () => {
    setShowCart(true);
  };
  const HideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={HideCartHandler} />}
      <Header onShow={ShowCartHandler} />
      <Footer />
    </CartProvider>
  );
}

export default App;
