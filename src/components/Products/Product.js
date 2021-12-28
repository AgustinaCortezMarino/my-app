import React from "react";
import { Col, Card, Row, Button, Badge } from "react-bootstrap";
import { saveLastInterestProduct } from "../../app/services/storageServices";
import db from "../../app/db/db";
import "../../assets/css/styles.css";

export const Product = ({ item }) => {
  const { title, image, price, description, category } = item;

  const addProductToCard = ({ title, price, category }) => {
    db.cart.add({
      title: title,
      price: price,
      category: category,
    });
  };
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <Card border="warning" style={{ width: "18rem" }}>
        <Row>
          <Col>
            <Card.Header>{category} </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={image}
              style={{ height: 120, width: 120 }}
            />
          </Col>
        </Row>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Row>
          <Col>
            <Button
              onClick={() => addProductToCard(item)}
              variant="outline-danger"
            >
              {" "}
              Agregar al carrito
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => saveLastInterestProduct(title)}
              variant="outline-success"
            >
              Precio{" "}
              <Badge pill bg="success">
                ${price}
              </Badge>
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
