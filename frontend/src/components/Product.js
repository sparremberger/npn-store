import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

/* my = margem no eixo y, p = padding em volta toda, rounded = border */

/* Ou então usa destructuring, só colocar {product}, e aí lá embaixo não precisa ter props */
const Product = (props) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image} variant="top" />
            </a>

            <Card.Body>
                <Card.Title as="div">
                    <strong>{props.product.name}</strong>
                </Card.Title>
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
