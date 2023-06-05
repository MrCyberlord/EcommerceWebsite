import React, { useContext } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const price = `$${props.price}`;
  const cartCtx = useContext(CartContext);
  const submitHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      quantity: props.quantity,
    });
  };

  return (
    <>
      <Col lg={6} className="justify-content-center margin-auto">
        <Card className="mt-5" style={{ width: "20rem" }}>
          <Card.Title className="p-4 text-center">
            <h1>{props.title}</h1>
          </Card.Title>
          <Link to={`/store/${props.id}`}>
            <Card.Img variant="top" src={props.src}></Card.Img>
          </Link>
          <Card.Body>
            <Form>
              <Form.Group className="d-flex justify-content-between mt-3">
                <span>{price}</span>
                <Button onClick={submitHandler}>Add to Cart</Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductItem;
