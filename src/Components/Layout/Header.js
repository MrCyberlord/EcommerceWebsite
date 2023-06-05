import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderButton from "./HeaderButton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "../Products/Product";
import Login from "../Pages/Login";
import CartContext from "../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const isLoggedIn = cartCtx.isLoggedIn;
  const history = useHistory();
  const logoutHandler = () => {
    cartCtx.logout();
    console.log("logout done");
    localStorage.removeItem("email");
    history.replace("/");
  };

  return (
    <>
      <Router>
        <Navbar
          fixed="top"
          bg="dark"
          variant="dark"
          className="justify-content-center"
        >
          <Nav className="mr-auto">
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/store">
                  Store
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/" onClick={logoutHandler}>
                LogOut
              </Nav.Link>
            )}
          </Nav>
          {isLoggedIn && <HeaderButton onClick={props.onShow} />}
        </Navbar>
        <div
          style={{
            backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20vh",
          }}
        >
          <h1 style={{ fontSize: "60px", marginTop: "50px" }}>The Generics</h1>
        </div>

        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/about" />}
          </Route>
          {isLoggedIn && (
            <Route path="/home" exact>
              <Home />
            </Route>
          )}
          {isLoggedIn && (
            <Route path="/store" exact>
              <Product />
            </Route>
          )}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          {!isLoggedIn && (
            <Route path="/login" exact>
              <Login />
            </Route>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default Header;
