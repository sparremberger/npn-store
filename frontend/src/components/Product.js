import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

/* my = margem no eixo y, p = padding em volta toda, rounded = border */

/* Ou então usa destructuring, só colocar {product}, e aí lá embaixo não precisa ter props */
const Product = (props) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${props.product._id}`}>
                    <Card.Title as="div">
                        <strong>{props.product.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>

            <Card.Text as="div">
                <Rating
                    value={props.product.rating}
                    text={`${props.product.numReviews} avaliações`}
                    /* Poderia ter: color='red' */
                />
            </Card.Text>

            <Card.Text as="h3">R${props.product.price}</Card.Text>
        </Card>
    );
};

export default Product;
