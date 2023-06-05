import ProductItem from "./ProductItem";
import { Container, Row } from "react-bootstrap";

const DummyData = [
  {
    id: "p1",
    title: "Magenta and Blue",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: "p2",
    title: "Black and white",
    price: 200,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: "p3",
    title: "Light from Black",
    price: 300,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: "p4",
    title: "Blue Color of Shore",
    price: 400,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const AvailableProduct = () => {
  return (
    <Container>
      <Row>
        {DummyData.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            src={item.imageUrl}
            quantity={item.quantity}
          />
        ))}
      </Row>
    </Container>
  );
};

export default AvailableProduct;
