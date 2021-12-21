import React from "react";
import { Row, Col } from "react-bootstrap";

const styles = {
  fontSize: "35px",
  fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  color: "#c70039",
};

export const HeaderApp = () => {
  return (
    <Row>
      <Col xs={12}>
        <div style={styles}>Mini Ecommerce</div>
      </Col>
    </Row>
  );
};
