import { Col, Container, Row } from "react-bootstrap";
import StoreItem from "../Componet/StoreItem/StoreItem";

const Store = () => {
  const productsArr = [
    {
      id: "p1",
      tag: "Album 1",
      title: "White Shirt",
      price: 500,
      imageUrl:
        "https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/0c627ee5fb9dc2ff52686dd232ca9539ae5749e8/public/product1of1.jpg",
    },
    {
      id: "p2",
      tag: "Album 2",
      title: "blue and white Shirt",

      price: 500,
      imageUrl:
        " https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/e72ffd882a1145ba9cefa1040220faaa8aed2578/src/assets/productimage/product2of1.jpg",
    },
    {
      id: "p3",
      tag: "Album 3",
      title: " white and Black top",

      price: 700,

      imageUrl:
        "  https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/4fdd28af379f9bdab9b71badb2b3c4ef351ada25/prod3of1.jpg",
    },
    {
      id: "p4",
      tag: "Album 4",
      title: "Black Skirt",

      price: 900,

      imageUrl:
        " https://raw.githubusercontent.com/sonu85336/Building-your-Ecommerce-Website/e72ffd882a1145ba9cefa1040220faaa8aed2578/src/assets/productimage/product4of1.jpg",
    },
  ];

  const h1style = {
    fontFamily: "Metal Mania",
    fontWeight: "bold",
    padding: "20px",
    fontSize: "30px",
  };
  return (
    <Container>
      <h1 className="text-center" style={h1style}>
        MUSIC
      </h1>
      <Row md="2" xs="1" lg="2" className="g-5">
        {productsArr.map((item) => (
          <Col key={item.id}>
            <StoreItem
              itemId={item.id}
              itemTag={item.tag}
              itemTitle={item.title}
              itemPrice={item.price}
              itemImgUrl={item.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
