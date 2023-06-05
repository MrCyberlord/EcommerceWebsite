import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";
import { useHistory } from "react-router-dom";

const url = "https://crudcrud.com/api/3396ce3219c84b62bfa220088fc6975a";

async function getCartItemsFromCrud() {
  const email = localStorage.getItem("email");
  const str = email.replace("@", "");
  const newstr = str.replace(".", "");
  try {
    const res = await fetch(`${url}/cart${newstr}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

async function postCart(obj) {
  const email = localStorage.getItem("email");
  const str = email.replace("@", "");
  const newstr = str.replace(".", "");

  try {
    await fetch(`${url}/cart${newstr}`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function putCart(id, obj) {
  const email = localStorage.getItem("email");
  const str = email.replace("@", "");
  const newstr = str.replace(".", "");

  try {
    await fetch(`${url}/cart${newstr}/${id}`, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function deleteCart(id) {
  const email = localStorage.getItem("email");
  const str = email.replace("@", "");
  const newstr = str.replace(".", "");

  try {
    await fetch(`${url}/cart${newstr}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err.message);
  }
}

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userLoggedIn = initialToken !== null;
  const email = localStorage.getItem("email");

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userLoggedIn) {
        const data = await getCartItemsFromCrud();
        const totalAmount = calculateTotalAmount(data);
        setCart(data);
        setTotalAmount(totalAmount);
      } else {
        setCart([]);
        setTotalAmount(0);
      }
    };

    fetchCartItems();
  }, [userLoggedIn, email]); // include user identity as dependency

  const addItemHandler = async (item) => {
    let isPresent = cart.find((obj) => obj.id === item.id);
    let isboolean = isPresent === undefined ? false : true;

    if (!isboolean) {
      const newTotalAmount = totalAmount + item.price;

      setTotalAmount(newTotalAmount);
      await postCart(item);
      const data = await getCartItemsFromCrud();
      setCart(data);
    } else {
      let newid;
      let newitem;

      cart.forEach(async (item1) => {
        if (item1.id === item.id) {
          newid = item1._id;
          newitem = { ...item1, quantity: item1.quantity };
        }
      });

      const newTotalAmount = totalAmount + item.price;
      setTotalAmount(newTotalAmount);
      delete newitem._id;
      await putCart(newid, { ...newitem, quantity: newitem.quantity + 1 });
      const data = await getCartItemsFromCrud();
      setCart(data);
    }
  };

  const removeItemHandler = async (item) => {
    let updatedDeleteCart = cart.filter((item1) => item1.id === item.id);

    const newTotalAmount = totalAmount - item.quantity * item.price;

    await deleteCart(updatedDeleteCart[0]._id);
    const data = await getCartItemsFromCrud();

    setCart(data);
    setTotalAmount(newTotalAmount);
  };

  const setDataHandler = (data, totalAmount) => {
    setCart(data);
    setTotalAmount(totalAmount);
  };

  const history = useHistory();

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    history.replace("/store");
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    setCart([]);
    setTotalAmount(0);
  };

  return (
    <CartContext.Provider
      value={{
        items: cart,
        totalAmount: parseInt(totalAmount),
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        setData: setDataHandler,
        token: token,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedIn: userLoggedIn,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
