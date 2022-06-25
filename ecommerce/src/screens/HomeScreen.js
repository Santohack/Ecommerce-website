import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Product from "../Components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const Prods = async () => {
      // const { data } = await axios.get("http://localhost:300/api/products");
      const { data } = await axios.get("/api/products");
      setProducts(data);
      console.log(data);
    };
    Prods();
  }, []);
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
