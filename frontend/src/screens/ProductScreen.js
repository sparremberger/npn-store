import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";

//import products from "../products";

const ProductScreen = ({ history, match }) => {
    //const product = products.find((p) => p._id === match.params.id);
    //const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        /*const fetchProduct = async () => {
            const res = await axios.get(`/api/products/${match.params.id}`);

            setProduct(res.data);
        };

        fetchProduct();*/
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/carrinho/${match.params.id}?qty=${qty}`);
    };

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Voltar
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            fluid
                        ></Image>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} avaliações`}
                                ></Rating>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: R${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>R${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Estoque:</Col>
                                        <Col>
                                            {product.countInStock > 0
                                                ? "Disponível"
                                                : "Produto indisponível"}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qtd: </Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    size="sm"
                                                    onChange={(e) =>
                                                        setQty(e.target.value)
                                                    }
                                                >
                                                    {[
                                                        ...Array(
                                                            product.countInStock
                                                        ).keys(),
                                                    ].map((x) => (
                                                        <option
                                                            key={x + 1}
                                                            value={x + 1}
                                                        >
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className="btn-block"
                                        type="button"
                                        disabled={product.countInStock === 0}
                                    >
                                        Adicionar ao carrinho
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;
