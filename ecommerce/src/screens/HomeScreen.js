import { Col, Row } from "react-bootstrap";

import React from "react";
import products from "../products";

const HomeScreen = () => {
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3> {product.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
