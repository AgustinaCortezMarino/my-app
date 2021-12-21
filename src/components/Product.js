import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import "../assets/css/styles.css";

const titleStyle = {
  fontSize: "16px",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  color: "#FF5733",
};

const descriptionStyle = {
  fontSize: "12px",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  color: "#581845",
};

export const Product = ({ item }) => {
  const { title, image, price, description } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={12}>
          <div style={titleStyle}>{title}</div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img className="img-product" alt="" src={image}></img>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div style={descriptionStyle}>{description}</div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div>
            <Button variant="outline-success">{price}</Button>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
