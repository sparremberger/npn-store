import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

/* Confere o products.map na cheatsheet qualquer coisa.
   Mas nesse caso ele provavelmente poderia ser substituído por um
   foreach. A output seria a mesma. Estudar mais essa parte. */

/* ^^^ após uma pesquisa no StackOverflow, está rolando uma "interpolação" nessa parte.
   os {} dentro de um componente dizem pro React colocar o conteúdo da variável dentro dele... acho. */
const HomeScreen = () => {
    return (
        <>
            <h1>Produtos</h1>

            <Row>
                {products.map((product) => (
                    // Quando fazemos uma lista, cada item precisa ser uma chave (key) única
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
