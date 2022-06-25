import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Rating from "../Components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // const product = Products.find((p) => p._id === id);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  return (
    <div>
      <Link className="my-3 btn btn-light" to="/">
        Back
      </Link>
      <Row className="my-3">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>{product.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color="orange"
              />
            </ListGroup.Item>

            <ListGroup.Item>
              <strong> Price-${product.price}</strong>
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Description: {product.description}</strong>
            </ListGroup.Item>
          </ListGroup>

          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-dark"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
