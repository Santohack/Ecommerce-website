import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import React from "react";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-1 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name ? product.name.slice(0, 30) : "...."}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color="orange"
          />
        </Card.Text>
        <Card.Text as="div">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
