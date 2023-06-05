import React, { useState, useRef, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router-dom";
import CartContext from "../store/cart-context";

const Login = () => {
  const history = useHistory();
  const authCtx = useContext(CartContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      history.replace("/store");
    }
  }, [authCtx.isLoggedIn, history]);

  const switchAuthModeHandler = () => {
    setIsLogin((prev) => !prev);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADZq_23O21-enrI7VslHf2cEyyB1n1XGw";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADZq_23O21-enrI7VslHf2cEyyB1n1XGw";
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Authentication failed!");
      }

      const data = await response.json();

      if (isLogin) {
        console.log("Login Completed");
        localStorage.setItem("email", enteredEmail);
        authCtx.login(data.idToken);
      } else {
        console.log("Sign up Completed");

        localStorage.setItem("email", enteredEmail);
        authCtx.login(data.idToken);
      }
    } catch (error) {
      alert(error.message);
      history.replace("/");
    }
  };

  return (
    <Container className="pt-5" style={{ maxWidth: "400px" }}>
      <Form onSubmit={submitHandler} className="pt-3">
        <h1 className="text-center">{isLogin ? "Log In" : "Sign Up"}</h1>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            ref={emailInputRef}
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mt-3 mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            ref={passwordInputRef}
            id="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-1 mb-3">
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
        <div className="text-center pt-3">
          <Button variant="secondary" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
